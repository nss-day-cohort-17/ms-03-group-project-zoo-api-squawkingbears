'use strict'

const { bookshelf } = require('../db/database')
const Zookeeper = require('../models/zookeeperMd')

module.exports.getAll = (req, res, next) => {
  Zookeeper.getAll()
  .then(zookeeper => res.status(200).json(zookeeper))
  .catch(error => {next(error)})
}

module.exports.getOneZookeeper = ({params: {id}}, res, next) => {
  Zookeeper.getOneZookeeper(id)
  .then(zookeeper => res.status(200).json(zookeeper))
  .catch(error => next(error))
}

module.exports.addZookeeper = ({body}, res, next) => {
  Zookeeper.addZookeeper(body)
  .then(zookeeper => res.status(200).json(zookeeper))
  .catch(error => (error))
}

module.exports.deleteZookeeper = ({params: {id}}, res, next) => {
  Zookeeper.deleteZookeeper(id)
  .then(zookeeper => res.status(200).json(zookeeper))
  .catch(error => (error))
}

module.exports.editZookeeper = ({body}, res, next) => {
  const id = body.id
  Zookeeper.editZookeeper(id, body)
  .then(zookeeper => res.status(200).json(zookeeper))
  .catch(error => next(error))
}
