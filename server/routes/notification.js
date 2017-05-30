const express = require('express')
const { notificationController } = require('../controllers')

const router = express.Router()

router.post('/', notificationController.create)

module.exports = router
