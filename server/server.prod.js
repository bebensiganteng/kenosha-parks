const express = require('express')
const bodyParser = require('body-parser')
const apiRoutes = require('./routes/api')
const google = require('./google-apis')
const admin = require('firebase-admin')
const adminConfig = require('./firebase')
const { join } = require('path')

const port = process.env.PORT
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

// The `prestart` NPM script will run webpack in production mode
// and write the bundle to disk under `dist/`.
app.use(express.static(join(__dirname, '../dist')))

// Register API routes.
app.use('/api', apiRoutes)

// Redirect any invalid requests back to document root with a 404 status
app.all('*', (req, res) => { res.status(404).redirect('/') })

app.listen(port, () => {
  console.info(`🚀 Server is running at http://localhost:${port}`)
})
