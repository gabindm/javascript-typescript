const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");

app.use(
  express.urlencoded({
    extended: true,
  })
);

//app.use(express.static("./public"));
app.use(express.static(path.resolve(__dirname, "public")));

//app.set("views", "./src/views");
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(routes);

app.listen(3333, () => {
  console.log("Server is running.");
  console.log("Servidor executado na porta 3333");
});
