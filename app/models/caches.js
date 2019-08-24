const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cache = new Schema({
  url: {
    type: String,
    required: [true, 'url is required'],
    lowercase: true
  },
  version: {
    type: Number,
    required: [true, 'version is required']
  },
  category: {
    type: String,
    required: [true, 'category is required']
  }
},
{ versionKey: false })

module.exports = mongoose.model('Cache', Cache)
