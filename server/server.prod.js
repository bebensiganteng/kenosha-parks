const express = require('express')
const bodyParser = require('body-parser')
const apiRoutes = require('./routes/api')
const google = require('./google-apis')
const requiresToken = require('./middleware/requires-token')
const admin = require('firebase-admin')
const adminConfig = require('./firebase')

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

// Register API routes.
// All API routes require a valid User JWT from Firebase.
app.use('/api', requiresToken, apiRoutes)

// No content for anything else as this is just serving an API.
app.all('*', (req, res) => { res.status(204).send() })

app.listen(port, () => {
  console.info(`🚀 Server is running at http://localhost:${port}`)
})
