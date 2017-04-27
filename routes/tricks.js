'use strict';

const { Router } = require('express');

const router = Router();

const { getAll, getOneTrick, addTrick, deleteTrick, editTrick } = require('../controllers/trickCtrl');


router.get('/tricks', getAll);
router.get('/tricks/:id', getOneTrick);
router.post('/tricks', addTrick);
router.delete('/tricks/:id', deleteTrick);
router.patch('/tricks', editTrick)

module.exports = router;
