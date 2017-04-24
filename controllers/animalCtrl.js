'use strict';

const { bookshelf } = require('../db/database');
const Trick = require('../models/trick');

module.exports.getAll = (req, res, next) => {
  Show.getAll()
  .then(tricks => {
    res.status(200).json(tricks);
  })
  .catch( (error) => {
    next(error);
  });
};

module.exports.getOneTrick = ({params: {id}}, res, next) => {
  Show.getOneTrick(id)
  .then(trick => {
    res.status(200).json(trick)
  })
  .catch( (error) => {
    next(error);
  });
};

module.exports.addTrick = ({body}, res, next) => {

};

module.exports.deleteTrick = ({params: {id}}, res, next) => {

};

module.exports.editTrick = (req, res, next) => {

}
