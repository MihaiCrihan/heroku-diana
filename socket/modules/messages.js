module.exports = async (app) => {
  const messages = []

  app.io.of('/messages')
    .on('connection', (socket) => {
      socket.emit('updated', messages)

      socket.on('set', (data) => {
        console.log(data)
        messages.push(data)
        socket.emit('updated', data)
        socket.broadcast.emit('updated', data)
      })
    })
}
