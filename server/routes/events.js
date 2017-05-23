const express = require('express')
const { eventsController } = require('../controllers')

const router = express.Router()

router.get('/', eventsController.index)
router.post('/', eventsController.create)
router.get('/:event', eventsController.show)
router.put('/:event', eventsController.update)
router.patch('/:event', eventsController.update)
router.delete('/:event', eventsController.destroy)

module.exports = router
