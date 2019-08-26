const RegionsController = require('../../controllers/regions')

module.exports = (app) => {
  app.post('/regions', [
    RegionsController.createRegion
  ])
  app.get('/regions/create', [
    RegionsController.getCreateSchema
  ])
  app.get('/regions', [
    RegionsController.getRegions
  ])
  app.get('/regions/:id', [
    RegionsController.getRegionById
  ])
  app.get('/regions/:id/edit', [
    RegionsController.getUpdateSchema
  ])
  app.patch('/regions/:id', [
    RegionsController.updateRegion
  ])
}
