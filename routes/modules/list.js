const ListController = require('../../controllers/list')

module.exports = (app) => {
  app.get('/diana', [
    ListController.getAll
  ])

  app.get('/diana/:id', [
    ListController.get
  ])

  app.post('/diana', [
    ListController.post
  ])

  app.patch('/diana/:id', [
    ListController.patch
  ])

  app.delete('/diana/:id', [
    ListController.delete
  ])
}
