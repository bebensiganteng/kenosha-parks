const express = require('express')
const eventsController = require('../controllers/events')

const router = express.Router()

router.get('/', eventsController.index)
router.post('/create', eventsController.create)

module.exports = router
