///////做一張 category model 的表，內容只有自動產出的 category id 和 種類們，之後要和 record model 結合成一份更詳盡的表
///////下一步和 user model 結合，讓使用者只能看到自己的資料

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

///////當連上資料庫後，這張表要呈現的內容
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

db.once('open', () => {
    CategoryModel.create(categories)
        .then(() => {
            db.close()
        })
    console.log('categorySeeder建立成功')
    
})