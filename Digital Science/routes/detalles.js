const express = require('express');
const router = express.Router();
const heroesController = require('../controllers/heroeController');

router.get('/heroes/detalle/id/:id', heroesController.detalles);

module.exports = router;