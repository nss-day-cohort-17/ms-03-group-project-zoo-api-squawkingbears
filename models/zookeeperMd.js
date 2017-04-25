'use strict'

const { bookshelf } = require('../db/database')
require('./zoneMd')

const ZooKeeper = bookshelf.Model.extend({
  tableName: 'zookeepers',
  zone: function() { return this.hasOne('Zone')}
}, {
  getAll: function() {
    return this.forge()
    .fetchAll()
    .then(zooKeepers => zooKeepers)
    .catch(error => error)
  },
  getOneZooKeeper: function(id) {
    return this.forge({id})
    .fetch()
    .then(zooKeeper => zooKeeper)
    .catch(error => error)
  },
  addZooKeeper: function(newZooKeeper) {
    return this.forge(newZooKeeper)
    .save()
    .then(zooKeeper => zooKeeper)
    .catch(error => error)
  },
  deleteZooKeeper: function(id) {
    return this.forge({id})
    .destroy()
    .then(zooKeeper => zooKeeper)
    .catch(error => error)
  },
  editZooKeeper: function(id, zooKeeperEdits) {
    return this.where({id})
    .save(zooKeeperEdits, {method: update})
    .then(zooKeeper => zooKeeper)
    .catch(error => error)
  }

})

module.exports = bookshelf.model("ZooKeeper", ZooKeeper)
