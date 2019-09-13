const Cache = require('../../models/caches')

module.exports = async (app) => {
  const get = async (category) => {
    const cachesObject = {}
    const caches = await Cache.aggregate([
      {
        $match: {
          category
        }
      },
      {
        $project: {
          _id: 0
        }
      }
    ])

    for (const entity of caches) {
      cachesObject[entity.url] = entity
    }

    return cachesObject
  }

  const create = async (cache) => {
    const url = cache.url
    const item = await Cache.find({ url })

    if (item.length) {
      await Cache.updateOne({ url }, cache)
    } else {
      await Cache.create(cache)
    }
  }

  const remove = async (cache) => {
    const url = cache.map((item) => item.url)
    await Cache.deleteMany({ url })
  }

  const caches = {
    Filters: await get('Filters'),
    Forms: await get('Forms'),
    Locales: await get('Locales')
  }

  app.io.of('/caches')
    .on('connection', (socket) => {
      socket.emit('updated', {
        ...caches.Filters,
        ...caches.Forms,
        ...caches.Locales
      })

      socket.on('set', (data) => {
        create(data)
          .then(() => {
            caches[data.category][data.url] = data
            socket.emit('register', data)
            socket.broadcast.emit('register', data)

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
          .catch((err) => {
            console.log(err)
          })
      })

      socket.on('get', (data) => {
        data && data(caches)
      })

      socket.on('delete', (data) => {
        remove(data)
          .then(() => {
            for (const item of data) {
              caches[item.category][item.url] = undefined
            }
            socket.emit('updated', {
              ...caches.Filters,
              ...caches.Forms,
              ...caches.Locales
            })
          })
          .catch((err) => {
            console.log(err)
          })
      })
    })
}
