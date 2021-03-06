'use strict';

const { bookshelf } = require('../db/database');
const Trick = require('../models/trickMd');

module.exports.getAll = (req, res, next) => {
  Trick.getAll()
  .then(tricks => {
    res.status(200).json(tricks);
  })
  .catch(error => {
    next(error);
  });
};

module.exports.getOneTrick = ({params: {id}}, res, next) => {
  Trick.getOneTrick(id)
  .then(trick => {
    res.status(200).json(trick)
  })
  .catch(error => {
    next(error);
  });
};

module.exports.addTrick = ({body}, res, next) => {
  Trick.addTrick(body)
  .then(trickId => {
    res.status(200).json(trickId)
  })
  .catch(error => {
    next(error);
  });
};

module.exports.deleteTrick = ({params: {id}}, res, next) => {
  Trick.deleteTrick(id)
  .then(trick => {
    res.status(202).json(trick)
  })
  .catch(error => {
    next(error);
  });
};

module.exports.editTrick = (req, res, next) => {
  Trick.editTrick(id, trickEdits)
  .then(trick => {
    res.status(200).json(trick)
  })
  .catch(error => {
    next(error);
  });
}
