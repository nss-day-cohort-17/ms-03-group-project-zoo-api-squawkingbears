'use strict';

const { Router } = require('express');

const router = Router();

router.use(require('./animals'))
router.use(require('./trainers'))
router.use(require('./tricks'))
router.use(require('./zones'))
router.use(require('./zookeepers'))

module.exports = router;
