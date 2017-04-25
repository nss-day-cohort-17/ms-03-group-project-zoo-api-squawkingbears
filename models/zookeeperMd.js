'use strict'

const { bookshelf } = require('../db/database')
require('./zoneMd')

const ZooKeeper = bookshelf.Model.extend({
  tableName: 'zoo_keepers',
  zone: function() { return this.hasOne('Zone')}
}, {
  getAll: function() {
    return this.forge()
    .fetchAll()
    .then(zookeepers => zookeepers)
    .catch(error => error)
  },
  getOneZookeeper: function(id) {
    return this.forge({id})
    .fetch()
    .then(zookeeper => zookeeper)
    .catch(error => error)
  },
  addZookeeper: function(newZookeeper) {
    return this.forge(newZookeeper)
    .save()
    .then(zookeeper => zookeeper)
    .catch(error => error)
  },
  deleteZookeeper: function(id) {
    return this.forge({id})
    .destroy()
    .then(zookeeper => zookeeper)
    .catch(error => error)
  },
  editZookeeper: function(id, zookeeperEdits) {
    return this.where({id})
    .save(zookeeperEdits, {method: update})
    .then(zookeeper => zookeeper)
    .catch(error => error)
  }

})

module.exports = bookshelf.model("ZooKeeper", ZooKeeper)
