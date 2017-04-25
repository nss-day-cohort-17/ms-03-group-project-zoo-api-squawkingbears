'use strict';

const { Router } = require('express');

const router = Router();

const { getAll, getOneZone, addZone, deleteZone, editZone } = require('../controllers/zoneCtrl');


router.get('/zones', getAll);
router.get('/zones/:id', getOneZone);
router.post('/zones', addZone);
router.delete('/zones/:id', deleteZone);
router.patch('/zones', editZone);

module.exports = router;
