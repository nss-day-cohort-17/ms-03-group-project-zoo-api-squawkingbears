'use strict'

const { bookshelf } = require('../db/database')
require('./animalMd')
require('./zookeeperMd')

const Zone = bookshelf.Model.extend({
  tableName: 'zones',
  animals: function() { return this.hasMany('Animal') },
  zookeepers: function() { return this.hasOne('ZooKeeper') }
}, {
  getAll: function() {
    return this.forge()
    .fetchAll()
    .then(zones => zones)
    .catch(error => error)
  },
  getOneZone: function(id) {
    return this.forge({id})
    .fetch()
    .then(zone => zone)
    .catch(error => error)
  },
  addZone: function(newZone) {
    return this.forge(newZone)
    .save()
    .then(zone => zone)
    .catch(error => error)
  },
  deleteZone: function(id) {
    return this.forge({id})
    .destroy()
    .then(zone => zone)
    .catch(error => error)
  },
  editZone: function(id, zoneEdits) {
    return this.where({id})
    .save(zoneEdits, {method: 'update'})
    .then(zone => zone)
    .catch(error => error)
  }
})


module.exports = bookshelf.Model("Zone", Zone)
