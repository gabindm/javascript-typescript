function dobro(x)
{
	return x*2
}

let dobro2 = function (x)
{
	return x*2
}

const operacoes = {
	'dobro3': function (x) {
		return 2*x
	}
}

console.log(`O dobro de 2 eh: ${dobro(2)}`)
console.log(`O dobro de 2 eh: ${dobro2(2)}`)
console.log(`O dobro de 2 eh: ${operacoes.dobro3(2)}`)
console.log(`O dobro de 2 eh: ${operacoes['dobro3'](2)}`)