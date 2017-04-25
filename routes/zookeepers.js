'use strict';

const { Router } = require('express');

const router = Router();

const { getAll, getOneZookeeper, addZookeeper, deleteZookeeper, editZookeeper } = require('../controllers/zookeeperCtrl');

router.get('/zookeepers', getAll);
router.get('/zookeepers/:id', getOneZookeeper);
router.post('/zookeepers/', addZookeeper);
router.delete('/zookeepers/:id', deleteZookeeper);
router.put('/zookeepers', editZookeeper)


module.exports = router;
