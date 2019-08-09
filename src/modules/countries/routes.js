const CountriesController = require('./controllers/countries.controller');

module.exports = app => {
  app.post('/countries', [
    CountriesController.insert
  ]);
  app.get('/countries/create', [
    CountriesController.schema
  ]);
  app.get('/countries', [
    CountriesController.list
  ]);
  app.get('/countries/:id', [
    CountriesController.getById
  ]);
  app.patch('/countries/:id', [
    CountriesController.patchById
  ]);
};
