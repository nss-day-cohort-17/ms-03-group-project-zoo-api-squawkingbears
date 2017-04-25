'use strict';

const { Router } = require('express');

const router = Router();

const { getAll, getOneTrick, addTrick, deleteTrick, editTrick } = require('../constrollers/trickCtrl');


router.get('/tricks', getAll);
router.get('/tricks/:id', getOneTrick);
router.post('/tricks', addTrick);
router.delete('/deleteTrick/:id', deleteTrick);
router.patch('/tracks', editTrick)

module.exports = router;
