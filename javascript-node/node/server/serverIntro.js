const express = require("express");
const app = express();

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

app.post("/", (req, res) => {
  res.send("Formulário recebido!");
});

app.get("/contato", (req, res) => {
  res.send("Entre em contato pelo email.");
});

app.listen(3333, () => console.log("Server is running."));
