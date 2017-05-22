const express = require('express')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const bodyParser = require('body-parser')
const { join } = require('path')
const config = require('./webpack.config')
const apiRoutes = require('./server/routes/api')
const opn = require('opn')
const google = require('./server/google-apis')

const isDev = process.env.NODE_ENV !== 'production'
const port = isDev ? 3000 : process.env.PORT
const app = express()
let devMiddleware

// Attempt to authorize the JWT client for Google APIs.
// For whatever reason the devs do not support promises.
console.log('Attempting to authorize Google JWT client...')
google.authorize((err, tokens) => {
  // Abort since the whole app is based on utilizing Google Calendar.
  if (err) {
    throw err
  }
  console.log('Successfully authorized Google JWT client.')
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

if (isDev) {
  const compiler = webpack(config)
  devMiddleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true
  })
  const { fileSystem } = devMiddleware

  app.use(devMiddleware)
  app.use(webpackHotMiddleware(compiler))

  app.get('/', (req, res) => {
    res.write(fileSystem.readFileSync(join(__dirname, 'dist/index.html')))
    res.end()
  })
} else {
  app.use(express.static(join(__dirname, 'dist')))
}

// Register API routes
app.use('/api', apiRoutes)

// Redirect any invalid requests back to document root with a 404 status
app.all('*', (req, res) => { res.status(404).redirect('/') })

// We need to wait until bundle is valid in development
if (isDev) {
  console.log('Waiting for webpack to finish...')
  devMiddleware.waitUntilValid(startServer)
} else {
  startServer()
}

function startServer () {
  app.listen(port, () => {
    console.info(`🚀 Server is running at http://localhost:${port}`)
    if (isDev) {
      opn(`http://localhost:${port}`)
    }
  })
}
