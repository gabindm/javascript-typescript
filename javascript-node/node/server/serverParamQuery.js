const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

//rota, (requisicao, resposta) => {}
app.get("/", (req, res) => {
  //res.send("Hello World!");
  res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
  `);
});

app.get("/testes/:idUsuario?", (req, res) => {
  //a '?' indica que parametro nao eh obrigatorio

  //console.log(req.params);
  //res.send(`Olá, usuário ${req.params.idUsuario}`);

  console.log(req.query);
  res.send(
    `Olá, usuário ${req.query.nome} ${req.query.sobrenome} de idade ${req.query.idade}`
  );
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(`Formulário recebido, ${req.body.nome}`);
});

app.listen(3333, () => {
  console.log("Server is running.");
  console.log("Servidor executado na porta 3333");
});
