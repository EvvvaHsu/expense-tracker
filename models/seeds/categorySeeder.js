if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const CategoryModel = require('../categoryModel')
const db = require('../../config/mongoose')

const categories = [
  ['家居物業', 'fa-home'],
  ['交通出行', 'fa-shuttle-van'],
  ['休閒娛樂', 'fa-grin-beam'],
  ['餐飲食品', 'fa-utensils'],
  ['其他', 'fa-pen']
].map(category => ({
  name: category[0],
  icon: `<i class="fas ${category[1]}"></i>`
}))

db.once('open', async () => {
  try {
    await CategoryModel.create(categories)
    console.log(categories)
    console.log('categorySeeder建立成功')
  } catch (error) {
    console.error('建立categorySeeder失敗:', error)
  } finally {
    db.close()
  }
})
