const express = require('express')
const eventsRoutes = require('./events')
const notificationRoutes = require('./notification')
const requiresToken = require('../middleware/requires-token')

const router = express.Router()

router.use('/events', eventsRoutes)
router.use('/notification', requiresToken, notificationRoutes)

// Handle any invalid requests
router.all('*', (req, res) => {
  res.status(404).json({ message: 'Invalid request.' })
})

module.exports = router
