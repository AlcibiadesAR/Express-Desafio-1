const express = require('express');
const router = express.Router();
const heroesController = require('../controllers/heroeController');

router.get('/heroes', heroesController.heroes);

module.exports = router;