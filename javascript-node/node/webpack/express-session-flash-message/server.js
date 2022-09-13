require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Base de dados conectada!");
    app.emit("pronto");
  })
  .catch((e) => console.log(e));

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const routes = require("./routes");
const path = require("path");
const { middlewareGlobal } = require("./src/middlewares/middleware");

app.use(
  express.urlencoded({
    extended: true,
  })
);

//app.use(express.static("./public"));
app.use(express.static(path.resolve(__dirname, "public")));

const sessionOptions = session({
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

//app.set("views", "./src/views");
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(middlewareGlobal);
app.use(routes);

app.on("pronto", () => {
  app.listen(3334, () => {
    console.log("Server is running.");
    console.log("Servidor executado na porta 3334");
  });
});
