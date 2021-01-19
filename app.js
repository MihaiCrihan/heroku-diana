const logger = require('morgan')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

require('custom-env').env()
require('./middleware')(app)
require('./routes')(app)

module.exports = app
