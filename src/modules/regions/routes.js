const RegionsController = require('./controllers/regions.controller');

module.exports = app => {
  app.post('/regions', [
    RegionsController.create
  ]);
  app.get('/regions/create', [
    RegionsController.schema
  ]);
  app.get('/regions', [
    RegionsController.store
  ]);
  app.get('/regions/:id', [
    RegionsController.get
  ]);
  app.patch('/regions/:id', [
    RegionsController.patch
  ]);
};
