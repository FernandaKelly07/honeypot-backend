const express = require("express");
const userControler = require("../controllers/users");
const userModel = require("../models/user");
const router = express.Router();

const user = new userControler(userModel);
router.post("/", (req, res) => user.salva(req, res));
router.post("/logar", (req, res) => user.logar(req, res));

module.exports = router;
