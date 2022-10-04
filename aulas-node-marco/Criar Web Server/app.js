//o módulo http existe no nucleo do node e permite que criemos aplicacoes web:
var http = require('http');

//agora, é preciso abrir um servidor http para se comunicar a um cliente:
//http.createServer().listen(8081); -- essa funcao cria o servidor, mas nao mostra nada na url
http.createServer(
	function (req, res) {
		res.end("Hello World!")
	}
).listen(8081);

console.log("O servidor esta rodando!");