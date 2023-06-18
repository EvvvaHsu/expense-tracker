const express = require('express')
const router = express.Router()
const recordModel = require('../../models/recordModel')

router.get('/new', (req, res) => {
    return res.render('new')
})

router.post('/', (req, res) => {
    const userId = req.user._id
    // const categoryId
    const { name, date, amount } = req.body
    


})

module.exports = router