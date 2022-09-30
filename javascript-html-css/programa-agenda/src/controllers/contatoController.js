const Contato = require("../models/ContatoModel");

exports.index = (req, res) => {
  return res.render("contato", {
    contato: {
      nome: "",
      sobrenome: "",
      email: "",
      telefone: "",
    },
  });
};

exports.register = async (req, res) => {
  try {
    const contato = new Contato(req.body);
    await contato.register();

    if (contato.errors.length > 0) {
      req.flash("errors", contato.errors);
      req.session.save(() => res.redirect("/contato/index"));
      return;
    }

    req.flash("success", "Contato cadastrado com secesso.");
    req.session.save(() =>
      res.redirect(`/contato/index/${contato.contato._id}`)
    );
    return;
  } catch (e) {
    console.log(e);
    return res.render("404");
  }
};

exports.editIndex = async function (req, res) {
  if (!req.params.id) {
    return res.render(404);
  }

  const foundContato = await Contato.buscaPorId(req.params.id);

  if (!foundContato) {
    return res.render(404);
  }

  res.render("contato", {
    contato: foundContato,
  });
};

exports.edit = async function (req, res) {
  try {
    if (!req.params.id) {
      return res.render(404);
    }

    const contato = new Contato(req.body);
    await contato.edit(req.params.id);

    if (contato.errors.length > 0) {
      req.flash("errors", contato.errors);
      req.session.save(() => res.redirect(`/contato/index/${req.params.id}`));
      return;
    }

    req.flash("success", "Contato editado com secesso.");
    req.session.save(() =>
      res.redirect(`/contato/index/${contato.contato._id}`)
    );
    return;
  } catch (e) {
    console.log(e);
    return res.render("404");
  }
};

exports.delete = async function (req, res) {
  try {
    if (!req.params.id) {
      return res.render(404);
    }

    const contato = await Contato.delete(req.params.id);

    if (!contato) {
      req.flash("errors", "Falha ao excluir contato.");
      req.session.save(() => res.redirect(`/`));
      return;
    }

    req.flash("success", "Contato excluído com secesso.");
    req.session.save(() => res.redirect(`/`));

    return;
  } catch (e) {
    console.log(e);
    return res.render("404");
  }
};
