const logger = require('morgan')
const express = require('express')
const socket = require('socket.io')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()
app.io = socket()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

require('custom-env').env()
require('./database')()
require('./middleware')(app)
require('./routes')(app)
require('./socket')(app)

module.exports = app
