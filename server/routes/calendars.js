const express = require('express')
const { calendarController } = require('../controllers')
const eventsRoutes = require('./events')

const router = express.Router()

router.get('/:calendarId', calendarController.index)
router.use('/:calendarId/events', eventsRoutes)

module.exports = router
