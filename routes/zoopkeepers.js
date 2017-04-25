'use strict';

const { Router } = require('express');

const router = Router();

const { getAll, getOneZookeeper, addZookeeper, deleteZookeeper, editZookeeper } = require('../controllers/zookeeperCtrl');

router.get('/zones', getAll);
router.get('/zones/:id', getOneZookeeper);
router.post('/zones/', addZookeeper);
router.delete('/zones/:id', deleteZookeeper);
router.patch('/zones', editZookeeper)


module.exports = router;
