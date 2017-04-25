'use strict';

const { Router } = require('express');

const router = Router();

const { getAll, getOneAnimal, addAnimal, deleteAnimal, editAnimal } = require('../controllers/animalCtrl');


router.get('/animals', getAll);
router.get('/animals/:id', getOneAnimal);
router.post('/animals', addAnimal);
router.delete('/animals/:id', deleteAnimal);
router.patch('/animals', editAnimal);


module.exports = router;
