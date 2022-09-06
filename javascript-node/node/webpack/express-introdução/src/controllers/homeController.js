const receiveInput = (req, res, next) => {
  res.render("index");
  console.log(`Respondendo ao cliente ${req.session.nome}`);
  next(); //para executar o próximo middleware
};

const sendInput = (req, res, next) => {
  console.log(req.body);
  res.send(`Formulário recebido, ${req.body.nome}`);
};

module.exports = { receiveInput, sendInput };
