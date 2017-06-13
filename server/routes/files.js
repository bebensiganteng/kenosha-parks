const express = require('express')
const { filesController } = require('../controllers')

const router = express.Router()

router.get('/:fileId', filesController.show)

module.exports = router
