'use strict'

const { bookshelf } = require('../db/database')
require('./animalMd')

const Trainer = bookshelf.Model.extend({
  tableName: "trainers",
  animals: function() { return this.hasMany('Animal')}
}, {
  getAll: function() {
    return this.forge()
    .fetchAll()
    .then(trainers => trainers)
    .catch(error => error)
  },
  getOneTrainer: function(id) {
    return this.forge({id})
    .fetch()
    .then(trainer => trainer)
    .catch(error => error)
  },
  addTrainer: function(newTrainer) {
    return this.forge(newTrainer)
    .save()
    .then(trainer => trainer)
    .catch(error => error)
  },
  deleteTrainer: function(id) {
    return this.forge({id})
    .destroy()
    .then(trainer => trainer)
    .catch(error => error)
  },
  editTrainer: function(id, trainerEdits) {
    return this.where({id})
    .save(trainerEdits, {method: 'update'})
    .then(trainer => trainer)
    .catch(error => error)
  }

})

module.exports = bookshelf.model("Trainer", Trainer)
