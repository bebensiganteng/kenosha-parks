const express = require('express')
const authController = require('../controllers/auth')

const router = express.Router()

router.get('/signin', authController.signin)
router.post('/login', authController.login)

module.exports = router
