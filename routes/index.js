const CountriesController = require('./modules/countries')
const CitiesController = require('./modules/cities')
const RegionsController = require('./modules/regions')
const UploadController = require('./modules/upload')

module.exports = (app) => {
  CountriesController(app)
  CitiesController(app)
  RegionsController(app)
  UploadController(app)
}
