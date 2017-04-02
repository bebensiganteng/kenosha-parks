const admin = require('firebase-admin')
const Event = require('../models/event')

exports.index = (req, res) => {
  res.redirect('/dashboard')
}

exports.create = (req, res) => {
  const event = Event(req.body)
  const eventsRef = admin.database().ref().child('events')
  eventsRef.set(event)
  req.flash('message', 'Successfully create event.')
  res.redirect('/dashboard')
}
