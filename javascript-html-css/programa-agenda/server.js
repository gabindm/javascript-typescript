require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose //base de dados
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false, //MongoParseError: option usefindandmodify is not supported
  })
  .then(() => {
    console.log("Base de dados conectada!");
    app.emit("pronto");
  })
  .catch((e) => console.log(e));

const session = require("express-session"); //identifica navegador do cliente. salva cookie da sessao
const MongoStore = require("connect-mongo"); //as sessoes serao salvas na base de dados
const flash = require("connect-flash"); //mensagens que serao lidas e depois apagadas. salvas apenas na sessao.
const routes = require("./routes"); //rotas da aplicação
const path = require("path"); //caminhos
const helmet = require("helmet"); //segurança
const csrf = require("csurf"); //tokens de segurança
const {
  //middlewares
  middlewareGlobal,
  checkCsrfError,
  csrfMiddleware,
} = require("./src/middlewares/middleware");

app.use(helmet());

app.use(
  //podemos postar formularios dentro da aplicacao
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public"))); //arquivos estaticos que podem ser acessados diretamente

const sessionOptions = session({
  //configuraçao
  secret: "test@1234",
  store: MongoStore.create({
    mongoUrl: process.env.CONNECTIONSTRING,
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 4, //7 dias
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views")); //arquivos que serao renderizados na tela
app.set("view engine", "ejs");

app.use(csrf());
//middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on("pronto", () => {
  app.listen(3335, () => {
    console.log("Server is running.");
    console.log("Servidor executado na porta 3335");
  });
});
