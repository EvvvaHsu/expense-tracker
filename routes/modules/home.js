const express = require('express')
const router = express.Router()
const recordModel = require('../../models/recordModel')

router.get('/', (req, res) =>{
    recordModel.find()
    .lean()
    .then( records => res.render('index', { records }))
    .catch(error => console.log(error))
    
})

module.exports = router