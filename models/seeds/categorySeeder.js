
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const CategoryModel = require('../categoryModel')
const db = require('../../config/mongoose')

db.once('open', () => {
    CategoryModel.create(categories)
        .then(() => {
            db.close()
        })
    console.log('categorySeeder建立成功')
    
})