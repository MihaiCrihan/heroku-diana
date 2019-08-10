const CountriesController = require('./controllers/countries.controller');

module.exports = app => {
  app.post('/countries', [
    CountriesController.create
  ]);
  app.get('/countries/create', [
    CountriesController.schema
  ]);
  app.get('/countries', [
    CountriesController.store
  ]);
  app.get('/countries/:id', [
    CountriesController.get
  ]);
  app.get('/countries/:id/edit', [
    CountriesController.edit
  ]);
  app.patch('/countries/:id', [
    CountriesController.patch
  ]);
};
