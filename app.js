const express = require('express')
const socket_io = require('socket.io')

const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const usersRouter = require('./routes/users')

const app = express()
const io = socket_io()
const messages = []
app.io = io

io.of('/messages').on('connection', socket => {
    socket.emit('newMessages', messages)
    socket.on('createNotification', data => {
        let date = new Date()
        messages.push(data)
        data.date = `${date.getHours()}:${date.getMinutes()}`
        socket.emit('newMessages', data)
        socket.broadcast.emit('newMessages', data)
    })
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
})

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/users', usersRouter)

module.exports = app
