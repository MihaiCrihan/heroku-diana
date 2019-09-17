module.exports = (app) => {
  app
    .io
    .of('/register')
    .on('connection', (socket) => {
      console.log('connect')
      socket.on('set', (data, callback) => {
        const user = app.io.of(`/${data}`)

        user.on('connection', (socket) => {
          socket.on('set', (data, callback) => {
            socket.emit('updated', 'test')
            callback()
          })
        })

        callback()
      })

      socket.on('disconnect', () => {
        console.log('disconnect')
      })
    })
}
