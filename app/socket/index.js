module.exports = app => {
  let messages = []
  let caches = {}
  const prepareData = (data) => {
    const date = new Date()
    data.date = `${date.getHours()}:${date.getMinutes()}`

    if (messages.length > 1) {
      data.id = messages.sort((a, b) => b.id - a.id)[0].id + 1
    } else {
      data.id = messages[0] ? messages[0].id + 1 : 1
    }
    return data
  }

  app.io.of('/messages').on('connection', socket => {
    socket.emit('newMessages', messages)
    socket.on('createMessage', data => {
      messages.push(prepareData(data))
      socket.emit('newMessages', prepareData(data))
      socket.broadcast.emit('newMessages', prepareData(data))
    })
    socket.on('delete', (id, callback) => {
      messages.splice(messages.findIndex(item => item.id === id), 1)
      callback()
    })
    socket.on('deleteAll', callback => {
      messages = []
      callback()
    })
  })

  app.io.of('/caches')
    .on('connection', socket => {
      socket.emit('updated', caches)
      socket.on('set', data => {
        for (const entity of data.entities) {
          caches[entity.name] = entity
        }
        socket.emit('updated', caches)
        socket.broadcast.emit('updated', caches)
      })

      socket.on('delete', (key) => {
        if (key) {
          caches[key] = undefined
        } else {
          caches = {}
        }
        socket.emit('updated', caches)
        socket.broadcast.emit('updated', caches)
      })

      socket.on('get', () => {
        socket.emit('updated', caches)
      })
    })
}
