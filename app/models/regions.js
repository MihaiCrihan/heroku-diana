const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Region = new Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    lowercase: true
  },
  countries: {
    type: [{
      value: String,
      text: String
    }],
    required: [true, 'country is required']
  }
},
{ versionKey: false })

module.exports = mongoose.model('Region', Region)
