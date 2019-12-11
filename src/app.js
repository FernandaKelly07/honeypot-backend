const express = require("express");
const route = require("./route/index");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.use(route);

module.exports = app;
