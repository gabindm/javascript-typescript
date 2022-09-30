//importamos core e regenerator para que o programa rode em navegadores mais antigos
import "core-js/stable";
import "regenerator-runtime/runtime";

import Login from "./modules/Login";
import Cadastro from "./modules/Cadastro";
import Contato from "./modules/Contato";

const login = new Login(".form-login");
login.init();

const cadastro = new Cadastro(".form-cadastro");
cadastro.init();

const contato = new Contato(".form-contato");
contato.init();
