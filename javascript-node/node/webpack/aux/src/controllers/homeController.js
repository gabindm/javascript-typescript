exports.paginaInicial = (req, res) => {
  // req.session.usuario = {
  //   nome: "Gabriela",
  //   logado: true,
  // };

  // console.log(req.session.usuario);

  // req.flash("info", "Mensagem de info.");
  // req.flash("error", "Mensagem de erro.");
  // req.flash("success", "Mensagem de success.");

  // console.log(req.flash("info"), req.flash("error"), req.flash("success"));

  res.render("index", {
    tituloSemHTML: "Este é o título da página",
    tituloComHTML: 'Este é o <span style="color: red;">título</span> da página',
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  });
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
