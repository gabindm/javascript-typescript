//require ('rootpath')();
game = require("./game");

choice = process.argv[2]; //input da linha de comando

if (choice>=0 && choice<=100 && parseInt(choice) == choice)
{
	let tentativas = 0; 

	game.restart();
	
	do
	{	
		guess = game.guess();
    	console.log("Meu palpite eh: " + guess);
 	   	tentativas++;
    
		if (guess==choice) 
		{
			console.log(`Voce acertou em ${tentativas} tentativa(s)!! ${choice} eh o numero correto!\n`);
			break;
		}

		else if (guess>choice)
		{
			console.log(`Errou!! ${guess} esta muito alto! Desca o valor.`);
			game.go_down();
		}
		else if (guess<choice)
		{
			console.log(`Errou!! ${guess} esta muito baixo! Suba o valor.`);
			game.go_up();
		}
	}
	while (guess!=choice); 

	}

else //trigger de erro
{
	console.log("Entrada incorreta. Insira um numero valido (0 a 100).\n");
	
	process.exit(); //sem isso funciona tb, mas é bom garantir que va encerrar
}