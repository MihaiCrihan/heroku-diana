const CitiesController = require('../../controllers/cities')

module.exports = (app) => {
  app.post('/cities', [
    CitiesController.createCity
  ])
  app.get('/cities/create', [
    CitiesController.getCreateSchema
  ])
  app.get('/cities/select', [
    CitiesController.getCitiesSelect
  ])
  app.get('/cities', [
    CitiesController.getCities
  ])
  app.get('/cities/:id', [
    CitiesController.getCityById
  ])
  app.get('/cities/:id/edit', [
    CitiesController.getUpdateSchema
  ])
  app.patch('/cities/:id', [
    CitiesController.updateCity
  ])
}
