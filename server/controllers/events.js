const google = require('googleapis')
const auth = require('../google-apis')
const Promise = require('bluebird')

const events = google.calendar('v3').events
const calendarId = process.env.CALENDAR_ID
const defaultOptions = { auth, calendarId }

exports.index = ({ query }, res) => {
  createAPIRequest(createOptionsFromQuery(query), 'list', res)
}

exports.create = ({ query }, res) => {
  createAPIRequest(createOptionsFromQuery(query), 'insert', res)
}

exports.show = ({ query, params: eventId }, res) => {
  let options = createOptionsFromQuery(query)
  options = Object.assign(options, eventId)
  createAPIRequest(options, 'get', res)
}

exports.update = ({ query }, res) => {
  createAPIRequest(createOptionsFromQuery(query), 'update', res)
}

exports.destroy = ({ query }, res) => {
  createAPIRequest(createOptionsFromQuery(query), 'delete', res)
}

function createOptionsFromQuery (query) {
  let options = Object.assign({}, defaultOptions)
  options = Object.assign(options, query)
  return options
}

async function createAPIRequest (options, method, res) {
  try {
    const response = await Promise.fromCallback(cb => events[method](options, cb))
    res.json(response)
  } catch (error) {
    res.status(error.code).json({
      status: error.code,
      error: {
        code: error.errors[0].reason,
        message: error.errors[0].message
      }
    })
  }
}
