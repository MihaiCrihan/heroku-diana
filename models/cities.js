const mongoose = require('mongoose')
const Schema = mongoose.Schema

const City = new Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    lowercase: true
  },
  regions: {
    type: [{
      value: String,
      text: String
    }],
    required: [true, 'region is required']
  }
},
{ versionKey: false })

module.exports = mongoose.model('City', City)
