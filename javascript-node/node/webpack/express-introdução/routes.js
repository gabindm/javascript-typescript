const express = require("express");
const routes = express.Router();
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

function meuMiddleware(req, res, next) {
  //next serve pra informar que um próximo middleware será chamado, que nesse caso é o homeController
  req.session = { nome: "Gabriela Nery" };
  console.log("");
  console.log("Passei no seu middleware.");
  console.log("");
  next(); //para executar o próximo middleware
}

//rotas da home
routes.get(
  "/",
  meuMiddleware,
  homeController.receiveInput,
  function (req, res, next) {
    console.log("");
    console.log("Passei no próximo middleware.");
    console.log("");
  }
);
routes.post("/", homeController.sendInput);

//rotas de contato
routes.get("/contato", contatoController.showContacts);

module.exports = routes;
