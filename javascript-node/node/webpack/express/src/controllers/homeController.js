const HomeModel = require("../models/HomeModel");

HomeModel.create({
  titulo: "Um título de testes.",
  descricao: "Uma descrição de testes.",
})
  .then((dados) => console.log(dados))
  .catch((e) => console.log(e));

const receiveInput = (req, res) => {
  res.render("index");
  console.log(`Respondendo ao cliente ${req.session.nome}`);
  return;
};

const sendInput = (req, res) => {
  console.log(req.body);
  res.send(`Formulário recebido, ${req.body.nome}`);
  return;
};

module.exports = { receiveInput, sendInput };
