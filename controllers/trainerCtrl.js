'use strict'

const { bookshelf } = require('../db/database')
const Trainer = require('../models/trainerMd')

module.exports.getAll = (req, res, next) => {
  Trainer.getAll()
  .then(trainer => res.status(200).json(trainer))
  .catch(error => next(error))
}

module.exports.getOneTrainer = ({body: {id}}, res, next) => {
  Trainer.getOneTrainer(id)
  .then(trainer => res.status(200).json(trainer))
  .catch(error => next(error))
}

module.exports.addTrainer = ({body}, res, next) => {
  Trainer.addTrainer(body)
  .then(trainer => res.status(200).json(trainer))
  .catch(error => next(error))
}

module.exports.deleteTrainer = ({body: {id}}, res, next) => {
  Trainer.deleteTrainer(id)
  .then(trainer => res.status(200).json(trainer))
  .catch(error => next(error))
}

module.exports.editTrainer = ({body}, res, next) => {
  Trainer.editTrainer
  .then(trainer => res.status(200).json(trainer))
  .catch(error => next(error))
}