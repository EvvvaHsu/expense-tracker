
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const db = require('../../config/mongoose')
const bcrypt = require('bcryptjs')
const CategoryModel = require('../categoryModel')
const RecordModel = require('../recordModel')
const UserModel = require('../userModel')
const { seedUsers, seedRecords } = require('../seedData')


db.once('open', async () => {

    try { 
        for (const user of seedUsers) {
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(user.password, salt)
            const createdUser = await UserModel.create({
                name: user.name,
                email: user.email,
                password: hash
            })
            console.log('seedUsers 建立成功')

            const userRecord = [] 

            for (const seedRecord of seedRecords) {
                const categoryName = await CategoryModel.findOne({ name: seedRecord.categoryName })
                .lean()

                seedRecord.userId = createdUser._id
                seedRecord.categoryId = categoryName._id
                userRecord.push(seedRecord)
            }
            await RecordModel.create(userRecord)
        }
                
            console.log('seedRecords 建立成功')
            process.exit()

        } catch (error) {
            console.log(error)
        }

    })
    // Promise.all(
    //     seedUsers.map((user, userIndex) => {

    //         return bcrypt
    //             .genSalt(10)
    //             .then(salt => bcrypt.hash(user.password, salt))
    //             .then(hash => UserModel.create({
    //                 name: user.name,
    //                 email: user.email,
    //                 password: hash
    //             }))
    //             .then((user) => {
    //                 console.log('recordSeeder user 建立成功')
    //                 const userRecord = []
    //                 return Promise.all(
    //                     seedRecords.map(seedRecord => {
    //                         return CategoryModel.findOne({ name: seedRecord.categoryName })
    //                             .lean()
    //                             .then((categoryName) => {
    //                                 seedRecord.userId = user._id
    //                                 seedRecord.categoryId = categoryName._id
    //                                 userRecord.push(seedRecord)
    //                             })
    //                     })
    //                 )
    //                     .then(() => {
    //                         return RecordModel.create(userRecord)
    //                     })
    //                     .catch(err => console.log(err))
    //             })
    //     })
    // )
    // .then(() => {
    //     console.log('使用者與資料建立成功')
    //     process.exit()
    // })
    // .catch(err => console.log(err))

