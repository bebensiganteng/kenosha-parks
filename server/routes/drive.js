const express = require('express')
const filesRoutes = require('./files')

const router = express.Router()

router.use('/files', filesRoutes)

module.exports = router
