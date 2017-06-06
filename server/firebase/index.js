const { credential } = require('firebase-admin')

exports.serviceAccount = {
  type: process.env.TYPE,
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.AUTH_CERT_URL,
  client_x509_cert_url: process.env.CLIENT_CERT_URL
}

// When setting config vars for Heroku/Dokku, we need to explicitly
// wrap the value in double quotes and parse it using `JSON.parse()`.
// Otherwise in development we just use the string value from `proncess.env`.
try {
  exports.serviceAccount['private_key'] = JSON.parse(process.env.PRIVATE_KEY)
} catch (error) {
  exports.serviceAccount['private_key'] = process.env.PRIVATE_KEY
}

exports.credential = credential.cert(exports.serviceAccount)

exports.databaseURL = process.env.DATABASE_URL

exports.adminConfig = {
  credential: exports.credential,
  databaseURL: exports.databaseURL
}
