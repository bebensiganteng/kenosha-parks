const google = require('googleapis')
const auth = require('../google-apis')
const Promise = require('bluebird')

const events = google.calendar('v3').events
const calendarId = '269m08gnggsctv40qtn2kpclgs@group.calendar.google.com'

exports.index = (req, res) => {
  const options = {
    auth,
    calendarId
  }
  Promise.fromCallback(cb => events.list(options, cb))
    .then(({ items }) => {
      res.json(items)
    })
    .error(error => {
      const response = {
        code: error.code,
        message: error.errors[0].message
      }
      res.status(error.code).json(response)
    })
}

exports.create = (req, res) => {}

exports.show = (req, res) => {}

exports.update = (req, res) => {}

exports.destroy = (req, res) => {}
