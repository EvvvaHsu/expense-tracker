const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const users = require('./modules/users')
const record = require('./modules/record')

router.use('/record', record)
router.use('/users', users)
router.use('/', home)

module.exports = router