const express = require('express')
const router = express.Router()
const RecordModel = require('../../models/recordModel')

router.get('/new', (req, res) => {
    return res.render('new')
})

router.post('/', (req, res) => {
    // const userId = req.user._id
    // // const categoryId
    // const { name, date, amount } = req.body
    
    // const record = new RecordModel({ name, userId, date, amount })

    // return record.save()
    // .then(() => res.redirect('/')
    // .catch(err => console.log('err!', err))
    // )

    res.render('/')
})

module.exports = router