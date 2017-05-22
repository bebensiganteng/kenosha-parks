const google = require('googleapis')
const serviceAccount = require('../.firebase/serviceAccount.json')

const { client_email, private_key } = serviceAccount
const scopes = [
  'https://www.googleapis.com/auth/calendar'
]

module.exports = new google.auth.JWT(client_email, serviceAccount, private_key, scopes)
