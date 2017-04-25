'use strict'

const { bookshelf } = require('../db/database')
const Animal = require('../models/animalMd')

module.exports.getAll = (req, res, next) => {
  Animal.getAll()
  .then(animals => res.status(200).json(animals))
  .catch(error => next(error))
}

module.exports.getOneAnimal = ({body: {id}}, res, next) => {
  Animal.getOneAnimal(id)
  .then(animal => res.status(200).json(animal))
  .catch(error => next(error))
}

module.exports.addAnimal = ({body}, res, next) => {
  Animal.addAnimal(body)
  .then(animal => res.status(200).json(animal))
  .catch(error => next(error))
}

module.exports.deleteAnimal = ({body: {id}}, res, next) => {
  Animal.deleteAnimal(id)
  .then(animal => res.status(200).json(animal))
  .catch(error => next(error))
}

module.exports.editAnimal = ({body}, res, next) => {
  const id = body.id
  Animal.editAnimal(id, body)
  .then(animal => res.status(200).json(animal))
  .catch(error => next(error))
}
