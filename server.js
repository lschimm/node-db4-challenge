const express = require("express");
const helmet = require("helmet");
const db = require("./data/db-config.js");

// const recipeRouter = require('./recipes/recipe-router.js') ??

const server = express();

server.use(express.json());

server.get();
