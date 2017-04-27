'use strict';

const { Router } = require('express');

const router = Router();

const { getAll, getOneTrainer, addTrainer, deleteTrainer, editTrainer } = require('../controllers/trainerCtrl');


router.get('/trainers', getAll);
router.get('/trainers/:id', getOneTrainer);
router.post('/trainers', addTrainer);
router.delete('/trainers/:id', deleteTrainer);
router.patch('/trainers', editTrainer);

module.exports = router;
