const { Router } = require('express')
const topicsController = require('../controllers/topics')

const router = Router()

router.post('/create', topicsController.create)

module.exports = router
