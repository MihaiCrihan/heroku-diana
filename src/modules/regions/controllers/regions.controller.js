const RegionsModel = require('../models/regions.model')

exports.create = (req, res) => {
  RegionsModel
    .create(req.body)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => {
      res.status(500).send(err)
    })
}

exports.schema = (req, res) => {
  RegionsModel
    .schema()
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => {
      res.status(500).send(err)
    })
}

exports.store = (req, res) => {
  RegionsModel
    .store()
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => {
      res.status(500).send(err)
    })
}

exports.get = (req, res) => {
  RegionsModel
    .get(req.params.id)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => {
      res.status(500).send(err)
    })
}

exports.patch = (req, res) => {
  RegionsModel
    .patch(req.body, req.params.id)
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => {
      res.status(500).send(err)
    })
}
