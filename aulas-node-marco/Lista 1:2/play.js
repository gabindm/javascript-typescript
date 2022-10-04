//require ('rootpath')();
game = require("./game");

choice = 67;
//choice = process.argv[2];

let i = 1; 
let tentativas = 1; 
let total_tentativas = 0;
let max = 0;
let min = 1; 

for(i; i <= 100; i++)
{
	choice = i; 
	game.restart();
	tentativas = 1; 
	
	do
	{	
		guess = game.guess();
    	console.log("Meu palpite eh: " + guess);
    
		if (guess==choice) 
		{
			console.log(`Voce acertou em ${tentativas} tentativa(s)!! ${choice} eh o numero correto!\n`);
			total_tentativas = total_tentativas + tentativas;
			if (tentativas > max)
			{
				max = tentativas;
			}
			if (tentativas < min)
			{
				min = tentativas;
			}
			break;
		}

		else if (guess>choice)
		{
			console.log(`Errou!! ${guess} esta muito alto! Desca o valor.`);
			game.go_down();
			tentativas++;
		}
		else if (guess<choice)
		{
			console.log(`Errou!! ${guess} esta muito baixo! Suba o valor.`);
			game.go_up();
			tentativas++;
		}
	}
	while (guess!=choice); 
}

total_tentativas = Math.floor(total_tentativas/100);
console.log(`A media de tentativas foi de: ${total_tentativas}`);
console.log(`A quantidade maxima de tentativas foi de: ${max}`);
console.log(`A quantidade minima de tentativas foi de: ${min}`);