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

exports.all = async ({ query }, res) => {
  // These are hard coded since it's a small set.
  // Doing requests dynamically got really messy, really fast.
  const ids = [
    'parksalliancecalendar@gmail.com',
    '2ok3o3k6kugcnoe0milta4kqog@group.calendar.google.com',
    'h5hacgta0g3qte2gr9d508ne18@group.calendar.google.com'
  ]
  const options = ids.map(id => {
    return createOptions(query, id)
  })
  try {
    const lincoln = await Promise.fromCallback(cb => events.list(options[0], cb))
    const hobbs = await Promise.fromCallback(cb => events.list(options[1], cb))
    const roosevelt = await Promise.fromCallback(cb => events.list(options[2], cb))
    let response = lincoln
    response.items = response.items.concat(hobbs.items)
    response.items = response.items.concat(roosevelt.items)
    res.json(response)
  } catch (error) {
    res.json(error)
  }
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
    if (error.hasOwnProperty('code')) {
      res.status(error.code).json(error)
    } else if (error.hasOwnProperty('cause')) {
      res.status(error.cause.code).json(error)
    } else {
      res.status(500).json(error)
    }
  }
}
