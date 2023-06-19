////////做一張 record model 的表，需包含 name, date, amount, userId, categoryId

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const db = require('../../config/mongoose')

const CategoryModel = require('../categoryModel')
const RecordModel = require('../recordModel')
const { seedUsers, seedRecords } = require('../seedData')

///////將資料寫入

db.once('open', () => {

    console.log('mongodb connected!')
    RecordModel.create( seedRecords )
    console.log('done')

    // Promise.all(
    //     Array.from( seedRecords, record => RecordModel.create({ ...record }) )
    // )
    // .then(() => {
    //     console.log('done')
    //     process.exit()
    // })

})