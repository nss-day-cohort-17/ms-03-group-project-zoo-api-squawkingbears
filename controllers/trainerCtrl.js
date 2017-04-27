'use strict'

const { bookshelf } = require('../db/database')
const Trainer = require('../models/trainerMd')

module.exports.getAll = (req, res, next) => {
  Trainer.getAll()
  .then(trainer => res.status(200).json(trainer))
  .catch(error => next(error))
}

module.exports.getOneTrainer = ({params: {id}}, res, next) => {
  Trainer.getOneTrainer(id)
  .then(trainer => res.status(200).json(trainer))
  .catch(error => next(error))
}

module.exports.addTrainer = ({body}, res, next) => {
  Trainer.addTrainer(body)
  .then(trainer => res.status(200).json(trainer))
  .catch(error => next(error))
}

module.exports.deleteTrainer = ({params: {id}}, res, next) => {
  Trainer.deleteTrainer(id)
  .then(trainer => res.status(202).json(trainer))
  .catch(error => next(error))
}

module.exports.editTrainer = ({body}, res, next) => {
  const id = body.id
  Trainer.editTrainer(id, body)
  .then(trainer => res.status(200).json(trainer))
  .catch(error => next(error))
}
