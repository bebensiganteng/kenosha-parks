const google = require('googleapis')
const auth = require('../google-apis')
const Promise = require('bluebird')

const { calendars } = google.calendar('v3')

exports.index = async (req, res) => {
  const { calendarId } = req.params
  try {
    const response = await Promise.fromCallback(cb => calendars.get({ auth, calendarId }, cb))
    res.status(200).json(response)
  } catch (error) {
    res.status(error.code).json({
      status: error.code,
      error
    })
  }
}
