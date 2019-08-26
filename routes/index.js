const CountriesController = require('./modules/countries')
const CitiesController = require('./modules/cities')
const RegionsController = require('./modules/regions')

module.exports = app => {
  CountriesController(app)
  CitiesController(app)
  RegionsController(app)
}
