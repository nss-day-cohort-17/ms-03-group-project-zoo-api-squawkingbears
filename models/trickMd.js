'use strict'

const { bookshelf } = require('../db/database')

const Trick = bookshelf.Model.extend({
  tableName: 'tricks'
}, {
  getAll: function() {
    return this.forge()
    .fetchAll()
    .then(tricks => tricks)
    .catch(error => error)
  },
  getOneTrick: function(id) {
    return this.forge({id})
    .fetch()
    .then(trick => trick)
    .catch(error => error)
  },
  addTrick: function(newTrick) {
    return this.forge(newTrick)
    .save()
    .then(trick => trick)
    .catch(error => error)
  },
  deleteTrick: function(id) {
    return this.forge({id})
    .destroy()
    .then(trick => trick)
    .catch(error => error)
  },
  editTrick: function(id, trickEdits) {
    return this.where({id})
    .save(trickEdits, {method: 'update'})
    .then(trick => trick)
    .catch(error => error)
  }
})
