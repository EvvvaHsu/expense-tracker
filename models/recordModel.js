const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recordSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    amount: {
        type: Number,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,     //關聯資料設定
        ref: 'UserModel',
        index: true,
        required: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,     //關聯資料設定
        ref: 'CategoryModel',
        index: true,
        required: true
      }
})


module.exports = mongoose.model('RecordModel', recordSchema)