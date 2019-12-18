const express = require("express");
const colmeiaController = require("../controllers/colmeias");
const colmeiaModel = require("../models/colmeia");
const router = express.Router();

const colmeia = new colmeiaController(colmeiaModel);

router.post("/", (req, res) => colmeia.save(req, res));
router.get("/:idUser", (req, res) =>
  colmeia.buscarColmeiasOrdenadasPorData(req, res)
);

module.exports = router;
