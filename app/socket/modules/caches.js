module.exports = app => {
  const caches = {
    Filters: {},
    Forms: {},
    Locales: {}
  }

  app.io.of('/caches')
    .on('connection', socket => {
      socket.emit('updated', {
        ...caches.Filters,
        ...caches.Forms,
        ...caches.Locales
      })
      socket.on('set', data => {
        console.log(data)
        for (const entity of data.entities) {
          caches[entity.category][entity.url] = entity
        }
        socket.emit('updated', {
          ...caches.Filters,
          ...caches.Forms,
          ...caches.Locales
        })
        socket.broadcast.emit('updated', {
          ...caches.Filters,
          ...caches.Forms,
          ...caches.Locales
        })
      })

      socket.on('get', (data, callback) => {
        callback && callback(caches[data.storeName][data.url])
      })
    })
}
