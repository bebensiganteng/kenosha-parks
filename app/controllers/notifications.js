const { messaging } = require('firebase-admin')
const { createPayload } = require('../models')

exports.compose = (req, res) => {
  const dryRun = req.app.get('env') === 'development'
  const payload = createPayload(req.body)
  messaging().sendToTopic(req.topic, payload, { dryRun })
    .then((response) => {
      req.flash('success', response)
      res.status(201).redirect('/dashboard')
    })
    .catch((error) => {
      req.flash('error', error)
      res.status(500).redirect('/dashboard')
    })
}
