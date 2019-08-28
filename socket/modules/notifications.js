const noticesModel = require('../../models/notifications')

module.exports = async (app) => {
  let notices = await noticesModel.select()

  app.io.of('/notices')
    .on('connection', (socket) => {
      socket.emit('updated', notices)

      socket.on('set', async (data) => {
        try {
          const inserted = await noticesModel.insert(data)

          data.id = inserted.insertId
          data.say = Number(data.say)
          notices.push(data)

          socket.emit('updated', data)
          socket.broadcast.emit('updated', data)
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

      socket.on('delete', async (id, callback) => {
        try {
          if (id) {
            await noticesModel.delete(id)
            notices.splice(notices.findIndex((item) => item.id === id), 1)
            callback()
          } else {
            await noticesModel.drop()
            notices = []
            callback()
          }
        } catch (error) {
          socket.emit('error', error)
        }
      })
    })
}
