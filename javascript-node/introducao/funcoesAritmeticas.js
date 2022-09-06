//funcoesAritmeticas.js
function adicaoOuConcatenacao(a, b)
{
	return a+b
}

function subtracao(a, b)
{
	return a-b
}

function multiplicacao(a, b) 
{
	return a*b
}

function divisao(a, b) 
{
	return a/b
}

function resto(a, b) 
{
	return a%b
}

function exponencial(a, b) 
{
	return a**b //note que não é ^, mas sim **
}

function raizQuadrada(a) 
{
	return Math.sqrt(a)
}

module.exports = {adicaoOuConcatenacao, subtracao, multiplicacao, divisao, resto, exponencial, raizQuadrada}
