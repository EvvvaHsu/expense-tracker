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
