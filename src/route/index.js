const express = require("express");
const userRoute = require("./users");
const colmeiaRoute = require("./colmeias");
const loteRoute = require("./lotes");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ api: "honeypot", version: "0.1" });
});

router.use("/usuarios", userRoute);
router.use("/colmeias", colmeiaRoute);
router.use("/lotes", loteRoute);

module.exports = router;
