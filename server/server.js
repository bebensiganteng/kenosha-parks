const express = require('express')
const bodyParser = require('body-parser')
const apiRoutes = require('./routes/api')
const google = require('./google-apis')
const admin = require('firebase-admin')
const { adminConfig } = require('./firebase')

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
app.use('/api', apiRoutes)

// Redirect any invalid requests to the City of Kenosha's website
app.all('*', (req, res) => {
  res.status(404).redirect('https://www.kenosha.org/')
})

app.listen(port, () => {
  console.info(`🚀 Server is running at http://localhost:${port}`)
})
