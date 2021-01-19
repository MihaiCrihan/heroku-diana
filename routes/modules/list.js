const ListController = require('../../controllers/list')

module.exports = (app) => {
  app.get('/todo_list', [
    ListController.getAll
  ])

  app.get('/todo_list/:id', [
    ListController.get
  ])

  app.post('/todo_list', [
    ListController.post
  ])

  app.put('/todo_list/:id', [
    ListController.put
  ])

  app.patch('/todo_list/:id', [
    ListController.patch
  ])

  app.delete('/todo_list/:id', [
    ListController.delete
  ])
}
