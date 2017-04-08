const { messaging } = require('firebase-admin')
const { createPayload } = require('../models')

exports.create = (req, res) => {
  const dryRun = req.app.get('env') === 'development'
  const payload = createPayload(req.body)
  messaging().sendToTopic(`/topics/${req.topic}`, payload, { dryRun })
    .then((response) => {
      req.flash('success', `Successfully sent notification. Reference ID: ${response.messageId}`)
      res.status(201).redirect('/dashboard')
    })
    .catch((error) => {
      req.flash('error', error.errorInfo.message)
      res.status(500).redirect('/dashboard')
    })
}
