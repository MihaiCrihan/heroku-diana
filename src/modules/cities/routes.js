const CitiesController = require('./controllers/cities.controller');

module.exports = app => {
  app.post('/cities', [
    CitiesController.create
  ]);
  app.get('/cities/create', [
    CitiesController.schema
  ]);
  app.get('/cities', [
    CitiesController.store
  ]);
  app.get('/cities/:id', [
    CitiesController.get
  ]);
  app.patch('/cities/:id', [
    CitiesController.patch
  ]);
};
