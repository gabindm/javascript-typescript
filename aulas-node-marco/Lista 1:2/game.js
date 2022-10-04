let top;  //o let faz com que essas variaveis existam apenas em game.js
let bottom;
let count;  
let current_guess;

function restart() 
{ //reiniciar o jogo
  top = 101;
  bottom = 0;
  count=0
}

function guess() 
{
	if (count >=0 && count < 7) 
	{
		count++;
		//console.log(`contador = ${count}`);
		current_guess = Math.floor(((top-bottom)/2)+bottom); //retorna inteiro
		return current_guess;
	}
	else 
	{
		throw 'Numero maximo de tentativas excedido, pistas enganosas.' 
		//console.log("Numero maximo de tentativas excedido, pistas enganosas.\n");
		//process.exit();
	}
}

function go_up() 
{
 	 bottom = current_guess; //precisa subir o palpite
}
	
function go_down () 
{
 	 top = current_guess; //precisa descer o palpite
}

module.exports = {restart, guess, go_up, go_down} //outros .js vao usar essas funçoes
 