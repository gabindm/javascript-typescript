const express = require("express");
const routes = express.Router();
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

//rotas da home
routes.get("/", homeController.receiveInput);
routes.post("/", homeController.sendInput);

//rotas de contato
routes.get("/contato", contatoController.showContacts);

module.exports = routes;
