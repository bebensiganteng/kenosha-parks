const express = require('express')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const bodyParser = require('body-parser')
const { join } = require('path')
const config = require('../webpack.config')
const apiRoutes = require('./routes/api')
const opn = require('opn')
const google = require('./google-apis')
const admin = require('firebase-admin')
const { adminConfig } = require('./firebase')

const port = process.env.PORT ? process.env.PORT : 3000
const app = express()

// Attempt to authorize the JWT client for Google APIs.
console.log('Attempting to authorize Google JWT client...')
google.authorize((err, tokens) => {
  // Abort since the whole app is based on utilizing Google Calendar.
  if (err) {
    throw err
  }
  console.log('Successfully authorized Google JWT client.')
})

// Initialize Firebase Admin. Only need to do this once.
admin.initializeApp(adminConfig)

// Allows parsing the body content via `req.body`
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Configure webpack dev server and hot reload.
const compiler = webpack(config)
const devMiddleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  noInfo: true
})
const { fileSystem } = devMiddleware

app.use(devMiddleware)
app.use(webpackHotMiddleware(compiler))

// The webpack dev server bundle is stored in memory,
// so we need to write its contents to the response body.
app.get('/', (req, res) => {
  res.write(fileSystem.readFileSync(join(__dirname, 'dist/index.html')))
  res.end()
})

// Register API routes.
app.use('/api', apiRoutes)

// Redirect any invalid requests back to document root with a 404 status
app.all('*', (req, res) => { res.status(404).redirect('/') })

// We need to wait until bundle is valid in development
console.log('Waiting for webpack to finish...')
devMiddleware.waitUntilValid(startServer)

function startServer () {
  app.listen(port, () => {
    console.info(`🚀 Server is running at http://localhost:${port}`)
    opn(`http://localhost:${port}`)
  })
}
