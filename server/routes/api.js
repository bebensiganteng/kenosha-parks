const express = require('express')
const calendarsRoutes = require('./calendars')
const driveRoutes = require('./drive')

const router = express.Router()

router.use('/calendars', calendarsRoutes)
router.use('/drive', driveRoutes)

// Handle any invalid requests
router.all('*', (req, res) => {
  res.status(404).json({ message: 'Invalid request.' })
})

module.exports = router
