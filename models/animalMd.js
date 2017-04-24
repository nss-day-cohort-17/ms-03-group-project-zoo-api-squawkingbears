'use strict'

const { bookshelf } = require('../db/database')
require('./zoneMd')
require('./trainerMd')

const Animal = bookshelf.Model.extend({
  tableName: animals,
  zone: function() { return this.hasOne('Zone')},
  trainer: function() { return this.hasOne('Trainer')}
}, {
  getAll: function() {
    return this.forge()
    .fetchAll()
    .then(rows => rows)
    .catch(error => error)
  },
  getOneAnimal: function() {
    return this.forge({id})
    .fetch()
    .then(animal => animal)
    .catch(error => error)
  }
})

module.exports = bookshelf.Model("Animal", Animal)