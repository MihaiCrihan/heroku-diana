const CitiesModel = require('../models/cities.model');

exports.create = (req, res) => {
  CitiesModel
    .create(req.body)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    })
};

exports.schema = (req, res) => {
  CitiesModel
    .schema()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    })
};

exports.store = (req, res) => {
  CitiesModel
    .store()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    })
};

exports.get = (req, res) => {
  CitiesModel
    .get(req.params.id)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    })
};

exports.patch = (req, res) => {
  CitiesModel
    .patch(req.body, req.params.id)
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    })
};
