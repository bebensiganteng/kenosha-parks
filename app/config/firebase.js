const { credential } = require('firebase-admin')
const serviceAccount = require('./resources/serviceAccount.json')

exports.client = {
  apiKey: 'AIzaSyAYSljolIQyXohUuSSnmRIUkcZ2UGtS90U',
  authDomain: 'farmers-market-dd671.firebaseapp.com',
  databaseURL: 'https://farmers-market-dd671.firebaseio.com',
  projectId: 'farmers-market-dd671',
  storageBucket: 'farmers-market-dd671.appspot.com',
  messagingSenderId: '79631003773'
}

exports.admin = {
  credential: credential.cert(serviceAccount),
  databaseURL: exports.client.databaseURL
}
