const { database } = require('firebase')
const { Event } = require('../models')

exports.index = (req, res) => {
  res.render('dashboard/index')
}

exports.create = (req, res) => {
  const event = Event(req.body)
  database().ref().child('events').push(event)
    .then(() => {
      res.status(201).redirect('/dashboard')
    })
    .catch((error) => {
      res.flash('error', error)
      res.status(500).redirect('/dashboard')
    })
}
