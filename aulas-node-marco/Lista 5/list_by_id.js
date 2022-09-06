const currencies = require('./currencies')

//console.log(currencies.by_id) //aqui podemos ver que by_id[0] é vazio pois nao existe currency com id=0

for (c of currencies.by_id) {
	if (c) //para nao gerar erro de undefinied, pois by_id[0] é undefinied
		console.log(c.symbol.customary) 
}
