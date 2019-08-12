const mongoose = require('mongoose')
const db = require('../config/db')

module.exports = () => {
  mongoose.connect(
    db.url,
    {
      useNewUrlParser: true,
      useCreateIndex: true
    }
  )
}
