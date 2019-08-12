const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Country = new Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    lowercase: true
  },
  cities: {
    type: [{
      value: String,
      text: String
    }],
    required: [true, 'city is required']
  }
},
{ versionKey: false })

module.exports = mongoose.model('Country', Country)
