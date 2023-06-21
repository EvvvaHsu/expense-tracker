const express = require('express')
const router = express.Router()
const RecordModel = require('../../models/recordModel')
const CategoryModel = require('../../models/categoryModel')


//渲染 seedRecords
router.get('/', (req, res) => {
    const userId = req.user._id
    // const date = new Date

    return CategoryModel.find()
        .lean()
        .sort({ _id: 'asc' })
        .then(categories => {
            return RecordModel.find({ userId })
                .populate('categoryId')
                .lean()
                .sort({ date: 'desc' })
                .then(records => {
                    let totalAmount = 0
                    records.forEach(record => {
                        totalAmount += record.amount
                    })
                    return res.render('index', { categories, records, totalAmount })
                })
                .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
})


//根據 category 篩選
router.post('/', (req, res) => {
    // const userId = req.user._id
    // const { categoryId } = req.body   ///category model產出的_id
    // // console.log(categoryId)
    // if (categoryId === "all"){
    //     return res.redirect('/')      ////全部的 value
    // } 
    // return CategoryModel.find()
    //     .lean()
    //     .then((categories) => {
    //         return RecordModel.find({ userId, categoryId })
    //             .populate('catogoryId')
    //             .lean()
    //             .sort({ date: 'decs' })
    //             .then((records) => {
    //                 let totalAmount = 0
    //                 records.forEach(record => {
    //                     totalAmount += record.amount
    //                 })
    //                 return res.render('index', { categories, records, totalAmount })
    //             })
    //             .catch(error => console.log(error))
    //     })
    //     .catch(error => console.log(error))
})


module.exports = router