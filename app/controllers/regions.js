const RegionsService = require('../services/regions')

module.exports = app => {
  app.post('/regions', [
    RegionsService.createRegion
  ])
  app.get('/regions/create', [
    RegionsService.getCreateSchema
  ])
  app.get('/regions', [
    RegionsService.getRegions
  ])
  app.get('/regions/:id', [
    RegionsService.getRegionById
  ])
  app.get('/regions/:id/edit', [
    RegionsService.getUpdateSchema
  ])
  app.patch('/regions/:id', [
    RegionsService.updateRegion
  ])
}
