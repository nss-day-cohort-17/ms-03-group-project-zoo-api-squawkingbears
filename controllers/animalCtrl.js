'use strict'

const { bookshelf } = require('../db/database')
const Animal = require('../models/animalMd')

module.exports.getAnimals = (req, res, next) => {
  Animal.getAll()
  .then(animals => res.status(200).json(animals))
  .catch(error => next(error))
}

module.exports.getAnimal = ({body: {id}}, res, next) => {
  Animal.getOneAnimal(id)
  .then(animal => res.status(200).json(animal))
  .catch(error => next(error))
}

module.exports.newAnimal = ({body}, res, next) => {
  Animal.addAnimal(body)
  .then(animal => res.status(200).json(animal))
  .catch(error => next(error))
}

module.exports.removeAnimal = ({body: {id}}, res, next) => {
  Animal.deleteAnimal(id)
  .then(animal => res.status(200).json(animal))
  .catch(error => next(error))
}

module.exports.animalEdit = ({body}, res, next) => {
  Animal.editAnimal
  .then(animal => res.status(200).json(animal))
  .catch(error => next(error))
}