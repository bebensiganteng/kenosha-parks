const { Router } = require('express')
const notificationsController = require('../controllers/notifications')

const router = Router()

router.post('/create', notificationsController.create)

module.exports = router
