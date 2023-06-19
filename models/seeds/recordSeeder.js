////////做一張 record model 的表，需包含 name, date, amount, userId, categoryId

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const db = require('../../config/mongoose')
const bcrypt = require('bcryptjs')
const CategoryModel = require('../categoryModel')
const RecordModel = require('../recordModel')
const UserModel = require('../userModel')
const { seedUsers, seedRecords } = require('../seedData')

///////將資料寫入

db.once('open', () => {

    Promise.all(
        seedUsers.map((user, userIndex) => {

            return bcrypt
                .genSalt(10)
                .then(salt => bcrypt.hash(user.password, salt))
                .then(hash => UserModel.create({
                    name: user.name,
                    email: user.email,
                    password: hash
                }))
                .then((user) => {
                    console.log('user created.')
                    const userRecord = []
                    return Promise.all(
                        seedRecords.map(seedRecord => {
                            return CategoryModel.findOne({ name: seedRecord.categoryName })
                                .lean()
                                .then((categoryName) => {
                                    seedRecord.userId = user._id
                                    seedRecord.categoryId = categoryName._id
                                    userRecord.push(seedRecord)
                                })
                        })
                    )
                        .then(() => {
                            return RecordModel.create(userRecord)
                        })
                        .catch(err => console.log(err))
                })
        })
    )
    .then(() => {
        console.log('使用者與資料建立成功')
        process.exit()
    })
    .catch(err => console.log(err))
})
