const express = require("express"); //ta salvo dentro da pasta ja

const app = express(); //const nao permite reescrever o valor 

app.get("/", function(req, res){ //criando a rota da aplicacao na url http://localhost:8081/
	res.send("Seja bem-vindo ao meu app!");
}); 

app.get("/sobre", function(req, res){ //criando a rota da aplicacao na url http://localhost:8081/sobre
	res.send("Esta pagina descreve sobre o que o app se trata.");
}); 

app.get("/cardapio", function(req, res){ //criando a rota da aplicacao na url http://localhost:8081/cardapio
	res.send("Esta pagina apresenta o cardapio!");
}); 

app.get("/ola/:cargo/:nome", function(req, res){ //criando um parametros. so acessa rota se digitar os parametros na url. Ex.: .../ola/programador/gabriela
	//res.send("Ola");
	res.send("<h1>Ola, " + req.params.nome + "</h1>" + "<h2>O seu cargo eh: " + req.params.cargo + "</h2>"); //mostra na app web os parametros inseridos. Pode passar html como parametro também.
	//so consegue enviar send 1 vez.
});

app.listen(8081, function() { //iniciar servidor na porta 8081; precisa ser a última linha do cod
// quando app.listen roda, executa uma funcao de callback function
	console.log("Servidor rodando na URL http://localhost:8081");
});