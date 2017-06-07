const express = require('express')
const { eventsController } = require('../controllers')

const router = express.Router()

router.get('/', eventsController.index)
router.get('/:eventId', eventsController.show)

module.exports = router
