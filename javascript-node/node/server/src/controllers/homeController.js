const receiveInput = (req, res) => {
  res.render("index");
};

const sendInput = (req, res) => {
  console.log(req.body);
  res.send(`Formulário recebido, ${req.body.nome}`);
};

module.exports = { receiveInput, sendInput };
