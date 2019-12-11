const express = require("express");
const loteController = require("../controllers/lotes");
const loteModel = require("../models/lote");

const router = express.Router();
const lote = new loteController(loteModel);

router.post("/", (req, res) => lote.save(req, res));
router.get("/:idUser", (req, res) => lote.buscarLotes(req, res));
router.get("/:idUser/:idLote", (req, res) => lote.buscarLotesPorId(req, res));

module.exports = router;
