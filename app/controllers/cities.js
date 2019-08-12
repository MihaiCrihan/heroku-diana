const CitiesService = require('../services/cities')

module.exports = app => {
  app.post('/cities', [
    CitiesService.createCity
  ])
  app.get('/cities/create', [
    CitiesService.getCreateSchema
  ])
  app.get('/cities/select', [
    CitiesService.getCitiesSelect
  ])
  app.get('/cities', [
    CitiesService.getCities
  ])
  app.get('/cities/:id', [
    CitiesService.getCityById
  ])
  app.get('/cities/:id/edit', [
    CitiesService.getUpdateSchema
  ])
  app.patch('/cities/:id', [
    CitiesService.updateCity
  ])
}
