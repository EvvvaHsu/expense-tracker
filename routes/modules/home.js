const express = require('express')
const router = express.Router()
const RecordModel = require('../../models/recordModel')
const CategoryModel = require('../../models/categoryModel')

// 渲染 seedRecords
router.get('/', (req, res) => {
  const userId = req.user._id

  CategoryModel.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(categories => {
      RecordModel.find({ userId })
        .populate('categoryId')
        .lean()
        .sort({ date: 'desc' })
        .then(records => {
          let totalAmount = 0
          records.forEach(record => {
            totalAmount += record.amount
          })
          records.map(record => {
            record.date = new Date(record.date).toISOString().slice(0, 10)
          })
          return res.render('index', { categories, records, totalAmount })
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
})

// 根據 category 篩選
router.post('/', (req, res) => {
  const userId = req.user._id
  const { categoryId } = req.body /// category model產出的_id
  if (categoryId === 'all') { /// /全部的 value
    return res.redirect('/')
  }
  CategoryModel.find()
    .lean()
    .then(categories => {
      RecordModel.find({ userId, categoryId })
        .populate('categoryId')
        .lean()
        .then(records => {
          let totalAmount = 0
          records.forEach(record => {
            totalAmount += record.amount
          })
          records.map(record => {
            record.date = new Date(record.date).toISOString().slice(0, 10)
          })
          return res.render('index', { categories, categoryId, records, totalAmount })
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
})

module.exports = router
