const express = require('express')
const eventsRoutes = require('./events')

const router = express.Router()

router.use('/events', eventsRoutes)

// Handle any invalid requests
router.all('*', (req, res) => {
  res.status(404).json({ message: 'Invalid request.' })
})

module.exports = router
