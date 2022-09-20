const Login = require("../models/LoginModel");

exports.index = (req, res) => {
  return res.render("contato");
};

exports.register = (req, res) => {
  return res.send("oi!");
};
