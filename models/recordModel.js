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
        required: false,
        default: Date.now
    },
    amount: {
        type: Number,
        required: false,
        // min: [1, 'at least one dollar']
    },
    userId: {
        type: Schema.Types.ObjectId,     //關聯資料設定
        ref: 'User',
        index: true,
        required: false
    },
    categoryId: {
        type: Schema.Types.ObjectId,     //關聯資料設定
        ref: 'Category',
        index: true,
        required: false
      }
})


module.exports = mongoose.model('RecordModel', recordSchema)