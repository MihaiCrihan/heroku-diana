const Cache = require('../../models/caches')

module.exports = async app => {
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
      cachesObject[entity.url] = await entity
    }

    return cachesObject
  }

  const create = async (cache) => {
    await Cache.create(cache)
  }

  const remove = async (cache) => {
    if (cache) {
      await Cache.findOneAndDelete({ ...cache })
    } else {
      await Cache.deleteMany()
    }
  }

  const caches = {
    Filters: await get('Filters'),
    Forms: await get('Forms'),
    Locales: await get('Locales')
  }

  app.io.of('/caches')
    .on('connection', socket => {
      socket.emit('updated', {
        ...caches.Filters,
        ...caches.Forms,
        ...caches.Locales
      })

      socket.on('set', data => {
        create(data.entities)
          .then(() => {
            for (const entity of data.entities) {
              caches[entity.category][entity.url] = entity
              socket.emit('register', entity)
              socket.broadcast.emit('register', entity)
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
          .catch((err) => {
            console.log(err)
          })
      })

      socket.on('get', (data) => {
        data && data(caches)
      })

      socket.on('delete', (data) => {
        remove(data)
          .then(async () => {
            if (data) {
              caches[data.category][data.url] = await undefined
            } else {
              caches.Filters = await {}
              caches.Forms = await {}
              caches.Locales = await {}
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
