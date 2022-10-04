function soma(a,b) {
	return a+b;
}

function sub(a,b) {
	return a-b;
}

function multi(a,b) {
	return a-b;
}

function div(a,b) {
	if (b==0) {
		console.log("Nao eh possivel denominador zero");
	}
	else {
		return a/b;
	}	
}

console.log(`Resultado: ${div(4,0)}`);