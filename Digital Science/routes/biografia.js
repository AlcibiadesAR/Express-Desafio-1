const express = require("express");
const router = express.Router();
const heroesController = require("../controllers/heroeController");

router.get("/heroes/bio/id/:id/:ok", heroesController.biografia);

module.exports = router;
