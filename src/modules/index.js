const Countries = require('./countries/routes');
const Cities = require('./cities/routes');
const Regions = require('./regions/routes');

module.exports = app => {
  Countries(app);
  Cities(app);
  Regions(app);
};
