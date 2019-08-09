const countries = require('./countries/routes');

module.exports = app => {
  countries(app);
};
