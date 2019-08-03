const express = require('express')
const socket_io = require('socket.io')

const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const usersRouter = require('./routes/users')

const app = express()
const io = socket_io()
app.io = io

let messages = []

const prepareData = (data) => {
    let date = new Date()
    data.date = `${date.getHours()}:${date.getMinutes()}`

    if (messages.length > 1) {
        data.id = messages.sort((a, b) => b.id - a.id)[0].id + 1
    } else {
        data.id = messages[0] ? messages[0].id + 1 : 1
    }
    return data
}

io.of('/messages').on('connection', socket => {
    socket.emit('newMessages', messages)
    socket.on('createMessage', data => {
        messages.push(prepareData(data))
        socket.emit('newMessages', prepareData(data))
        socket.broadcast.emit('newMessages', prepareData(data))
    })
    socket.on('delete', (id, callback) => {
        messages.splice( messages.findIndex(item => item.id === id), 1)
        callback()
    })
    socket.on('deleteAll', callback => {
        messages = []
        callback()
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
