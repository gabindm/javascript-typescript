exports.meuMiddleware = (req, res, next) => {
  //next serve pra informar que um próximo middleware será chamado, que nesse caso é o homeController
  req.session = { nome: "Gabriela Nery" };

  if (req.body.nome) {
    console.log(`\nVi que foi enviado o nome ${req.body.nome}.\n`);
    next();
  }

  console.log("");
  console.log("Passei no seu middleware global.");
  console.log("");
  next(); //para executar o próximo middleware
};

exports.outroMiddleware = (req, res, next) => {
  next();
};
