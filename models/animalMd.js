'use strict'

const { bookshelf } = require('../db/database')
require('./zoneMd')
require('./trainerMd')

const Animal = bookshelf.Model.extend({
  tableName: "animals",
  zone: function() { return this.belongsTo('Zone')},
  trainer: function() { return this.belongsTo('Trainer')}
}, {
  getAll: function() {
    return this.forge()
    .fetchAll({withRelated: ['zone', 'trainer'], require: true})
    .then(animals => animals)
    .catch(error => error)
  },
  getOneAnimal: function(id) {
    return this.forge({id})
    .fetch()
    .then(animal => animal)
    .catch(error => error)
  },
  addAnimal: function(newAnimal) {
    return this.forge(newAnimal)
    .save()
    .then(animal => animal)
    .catch(error => error)
  },
  deleteAnimal: function(id) {
    return this.forge({id})
    .destroy()
    .then(animal => animal)
    .catch(error => error)
  },
  editAnimal: function(id, animalEdits) {
    return this.where({id})
    .save(animalEdits, {method: 'update'})
    .then(animal => animal)
    .catch(error => error)
  }
})

module.exports = bookshelf.model("Animal", Animal)
