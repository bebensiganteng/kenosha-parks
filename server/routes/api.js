const express = require('express')
const apiController = require('../controllers/api')

const router = express.Router()

router.get('/events', apiController.index)
router.post('/events', apiController.create)
router.get('/events/:event', apiController.show)
router.put('/events/:event', apiController.update)
router.patch('/events/:event', apiController.update)
router.delete('/events/:event', apiController.destroy)

// Handle any invalid requests
router.all('*', apiController.all)

module.exports = router
