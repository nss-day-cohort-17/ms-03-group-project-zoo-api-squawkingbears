'use strict'

const { bookshelf } = require('../db/database')
const Zookeeper = require('./zookeeperMd')

module.exports.getAll = (req, res, next) => {
  Zookeeper.getAll()
  .then(zookeeper => zookeeper)
  .catch(error => next(error)
}

module.exports.getOneZookeeper = ({body: {id}}, res, next) => {
  Zookeeper.getOneZookeeper(id)
  .then(zookeeper => zookeeper)
  .catch(error => next(error))
}

module.exports.addZookeeper = ({body}, res, next) => {
  Zookeeper.addZookeeper(body)
  .then(zookeeper => zookeeper)
  .catch(error => (error))
}

module.exports.deleteZookeeper = ({body: {id}}, res, next) => {
  Zookeeper.deleteZookeeper(id)
  .then(zookeeper => zookeeper)
  .catch(error => (error))
}

module.exports.editZookeeper = ({body}, res, next) => {
  const id = body.id
  Zookeeper.editZookeeper(id, body)
  .then(zookeeper => zookeeper)
  .catch(error => next(error))
}
