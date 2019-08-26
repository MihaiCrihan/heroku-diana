const CountriesController = require('../../controllers/countries')

module.exports = (app) => {
  app.post('/countries', [
    CountriesController.createCountry
  ])
  app.get('/countries/create', [
    CountriesController.getCreateSchema
  ])
  app.get('/countries/:id/edit', [
    CountriesController.getUpdateSchema
  ])
  app.patch('/countries/:id', [
    CountriesController.updateCountry
  ])
}
