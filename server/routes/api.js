const express = require('express')
const calendarsRoutes = require('./calendars')
const driveRoutes = require('./drive')
const notificationRoutes = require('./notification')
const requiresToken = require('../middleware/requires-token')

const router = express.Router()

router.use('/calendars', calendarsRoutes)
router.use('/drive', driveRoutes)
router.use('/notification', requiresToken, notificationRoutes)

// Handle any invalid requests
router.all('*', (req, res) => {
  res.status(404).json({ message: 'Invalid request.' })
})

module.exports = router
