const express = require('express')
const socket_io = require('socket.io')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const app = express()

app.io = socket_io()

app.use(bodyParser.urlencoded({extended: false}))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})

require('./modules')(app);
require('./socket')(app);

module.exports = app
