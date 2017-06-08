const google = require('googleapis')
const auth = require('../google-apis')
const Promise = require('bluebird')

const events = google.calendar('v3').events

exports.index = ({ query, params }, res) => {
  createAPIRequest(createOptions(query, params.calendarId), 'list', res)
}

exports.create = ({ query, params }, res) => {
  createAPIRequest(createOptions(query, params.calendarId), 'insert', res)
}

exports.show = ({ query, params }, res) => {
  const options = createOptions(query, params.calendarId, { eventId: params.eventId })
  createAPIRequest(options, 'get', res)
}

exports.update = ({ query, params }, res) => {
  createAPIRequest(createOptions(query, params.calendarId), 'update', res)
}

exports.destroy = ({ query, params }, res) => {
  createAPIRequest(createOptions(query, params.calendarId), 'delete', res)
}

function createOptions (query, calendarId, props = {}) {
  let options = Object.assign({ auth, calendarId }, query)
  options = Object.assign(options, props)
  return options
}

async function createAPIRequest (options, method, res) {
  try {
    const response = await Promise.fromCallback(cb => events[method](options, cb))
    res.json(response)
  } catch (error) {
    res.json(error)
  }
}
