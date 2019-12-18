const express = require("express");
const route = require("./route/index");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(route);

module.exports = app;
