const express = require('express')
const router = express.Router()
const RecordModel = require('../../models/recordModel')
const CategoryModel = require('../../models/categoryModel')
const UserModel = require('../../models/userModel')

router.get('/', (req, res) => {
        // const userId = req.user._id
        // console.log(userId)

        // RecordModel.find({ userId })
        //     .populate('categoryId')
        //     .lean()
        //     .then(records => {
        //         ////計算總金額
        //         let totalAmount = 0
        //         records.forEach(record => {
        //             totalAmount += record.amount
        //         })
        //         res.render('index', { records, totalAmount })
        //     })
        //     .catch(error => console.log(error))
        res.render('index')
    })


module.exports = router