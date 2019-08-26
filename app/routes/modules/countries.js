const CountriesService = require('../../controllers/countries')

module.exports = app => {
  app.post('/countries', [
    CountriesService.createCountry
  ])
  app.get('/countries/create', [
    CountriesService.getCreateSchema
  ])
  app.get('/countries/:id/edit', [
    CountriesService.getUpdateSchema
  ])
  app.patch('/countries/:id', [
    CountriesService.updateCountry
  ])
}
