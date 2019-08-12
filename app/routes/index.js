const CountriesController = require('../controllers/countries')
const CitiesController = require('../controllers/cities')
const RegionsController = require('../controllers/regions')

module.exports = app => {
  CountriesController(app)
  CitiesController(app)
  RegionsController(app)
}
