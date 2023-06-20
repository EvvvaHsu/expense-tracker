const express = require('express')
const router = express.Router()
const RecordModel = require('../../models/recordModel')
const CategoryModel = require('../../models/categoryModel')

router.get('/', (req, res) => {
    const userId = req.user._id
    const date = new Date

    CategoryModel.find()
        .lean()
        .sort({ _id: 'asc' })
        .then(categoryResults => {
            RecordModel.find({ userId })
                .populate('categoryId')
                .lean()
                .sort({ date: 'desc' })
                .then(records => {
                    let totalAmount = 0
                    records.forEach(record => {
                        totalAmount += record.amount
                    })
                    res.render('index', { categoryResults, records,  totalAmount })
                })
                .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
})


module.exports = router