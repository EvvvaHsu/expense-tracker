const express = require('express')
const router = express.Router()
const RecordModel = require('../../models/recordModel')
const CategoryModel = require('../../models/categoryModel')

router.get('/', (req, res) => {

    const userId = req.user._id
    return CategoryModel.find()
    .lean()
    .then((categories) => {
        return RecordModel.find( userId )
        .populate('categoryId')
        .lean()
        .then(records => {
            ////計算總金額

            let totalAmount = 0
            records.forEach(record => {
                totalAmount += record.amount
            })

            res.render('index', { categories, records, totalAmount })
        }
        )
        .catch(error => console.log(error))

    })

    
})

module.exports = router