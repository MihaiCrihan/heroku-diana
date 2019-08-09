const countryRoutes = require('./country/routes');

module.exports = app => {
  countryRoutes(app);
};
