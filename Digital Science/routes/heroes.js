const express = require("express");
const router = express.Router();
const heroesController = require("../controllers/heroeController");

router.get("/heroes", heroesController.heroes);
router.get("/heroes/detalle/id/:id", heroesController.detalles);
router.get("/heroes/bio/id/:id/:ok", heroesController.biografia);

module.exports = router;


