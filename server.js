const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));