'use strict';

const { bookshelf } = require('../db/database');
const Zone = require('../models/zoneMd');

module.exports.getAll = (req, res, next) => {
  Zone.getAll()
  .then(zones => {
    res.status(200).json(zones);
  })
  .catch(error => {
    next(error);
  });
};

module.exports.getOneZone = ({params: {id}}, res, next) => {
  Zone.getOneZone(id)
  .then(zone => {
    res.status(200).json(zone)
  })
  .catch(error => {
    next(error);
  });
};

module.exports.addZone = ({body}, res, next) => {
  Zone.addZone(body)
  .then(zoneId => {
    res.status(200).json(zoneId)
  })
  .catch(error => {
    next(error);
  });
};

module.exports.deleteZone = ({params: {id}}, res, next) => {
  Zone.deleteZone(id)
  .then(zone => {
    res.status(202).json(zone)
  })
  .catch(error => {
    next(error);
  });
};

module.exports.editZone = ({body}, res, next) => {
  const id = body.id
  Zone.editZone(id, body)
  .then(zone => {
    res.status(200).json(zone)
  })
  .catch(error => {
    next(error);
  });
}
