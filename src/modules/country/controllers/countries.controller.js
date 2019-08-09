const CountriesModel = require('../models/countries.model');

exports.insert = (req, res) => {
  CountriesModel
    .insert(req.body)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    })
};

exports.schema = (req, res) => {
  CountriesModel
    .schema()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    })
};

exports.list = (req, res) => {
  CountriesModel
    .list()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    })
};

exports.getById = (req, res) => {
  CountriesModel
    .getById(req.params.id)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    })
};

exports.patchById = (req, res) => {
  CountriesModel
    .patchById(req.body, req.params.id)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    })
};
