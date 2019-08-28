const noticesModel = require('../../models/notifications')

module.exports = async (app) => {
  let notices = await noticesModel.select()

  app.io.of('/notices')
    .on('connection', (socket) => {
      socket.emit('updated', notices)

      socket.on('set', async (data) => {
        try {
          const inserted = await noticesModel.insert(data)
          const item = await noticesModel.selectById(inserted.insertId)

          notices.push(item)

          socket.emit('updated', item)
          socket.broadcast.emit('updated', item)
        } catch (error) {
          socket.emit('error', error)
        }
      })

      socket.on('update', async (id) => {
        try {
          await noticesModel.update(id)
          const index = notices.findIndex((item) => item.id === id)

          notices[index].say = 1

          socket.emit('updated', notices[index])
          socket.broadcast.emit('updated', notices[index])
        } catch (error) {
          socket.emit('error', error)
        }
      })

      socket.on('delete', async (data, callback) => {
        try {
          if (data) {
            await noticesModel.delete(data)
            notices.splice(notices.findIndex((item) => item.id === data), 1)
            socket.emit('updated', notices)
            socket.broadcast.emit('updated', notices)
            callback()
          } else {
            await noticesModel.drop()
            notices = []
            socket.emit('updated', notices)
            socket.broadcast.emit('updated', notices)
            callback()
          }
        } catch (error) {
          socket.emit('error', error)
        }
      })
    })
}
