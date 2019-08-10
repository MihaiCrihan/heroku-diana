const CountriesModel = require('../models/countries.model');

exports.create = (req, res) => {
  CountriesModel
    .create(req.body)
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

exports.store = (req, res) => {
  CountriesModel
    .store()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    })
};

exports.get = (req, res) => {
  CountriesModel
    .get(req.params.id)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    })
};

exports.edit = (req, res) => {
  CountriesModel
    .edit(req.params.id)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    })
};


exports.patch = (req, res) => {
  CountriesModel
    .patch(req.body, req.params.id)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    })
};
