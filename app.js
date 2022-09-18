const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.static('./Upload')) // fo image access using url

app.use(express.json());
app.use(cors());

module.exports = app