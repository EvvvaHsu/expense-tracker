const express = require('express')
const router = express.Router()
const RecordModel = require('../../models/recordModel')
const CategoryModel = require('../../models/categoryModel')

router.get('/new', (req, res) => {
  return CategoryModel.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(categories => res.render('new', { categories }))
    .catch(error => console.log(error))
})

router.post('/new', (req, res) => {
  const userId = req.user._id
  const record = req.body
  return RecordModel.create({ ...record, userId })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id

  CategoryModel.find({})
    .lean()
    .then(categories => {
      // console.log(categories)
      return RecordModel.findOne({ userId, _id })
        .populate('categoryId')
        .lean()
        .then(record => {
          record.date = new Date(record.date).toISOString().slice(0, 10)
          // console.log(record.date)
          // console.log(categories)
          res.render('edit', { record, categories })
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const _id = req.params.id

  RecordModel.findByIdAndUpdate(_id, req.body)
    .then(() => {
      // console.log(req.body)
      res.redirect('/')
    })
    .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
  const _id = req.params.id
  RecordModel.findByIdAndDelete(_id)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
