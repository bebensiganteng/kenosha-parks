const express = require('express')
const { notificationController } = require('../controllers')

const router = express.Router()

router.post('/', eventsController.create)

module.exports = router
