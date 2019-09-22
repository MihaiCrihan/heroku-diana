module.exports = async (app) => {
  const messages = []

  app.io.of('/messages')
    .on('connection', (socket) => {
      socket.emit('updated', messages)

      socket.on('set', (data) => {
        messages.push({
          ...data,
          color: '#D32F2F'
        })
        socket.emit('updated', data)
        socket.broadcast.emit('updated', {
          ...data,
          color: '#D32F2F'
        })
      })
    })
}
