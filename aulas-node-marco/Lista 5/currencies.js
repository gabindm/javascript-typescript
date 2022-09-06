const by_symbol = {
	'BRL': {
		symbol: {
			iso4217: 'BRL',
			prefix: 'R$'
		},
		decimals: 2,
		category: 'fiat',
		id : 1
	},
	'BTC': {
		symbol: {
			iso4217: 'XBT',
			prefix: '\u20BF'
		},
		decimals: 8,
		category: 'crypto',
		id : 2
	},
	'USD': {
		symbol: {
			iso4217: 'USD',
			prefix: '$'
		},
		decimals: 2,
		category: 'fiat',
		id : 3
	},
	'EUR': {
		symbol: {
			iso4217: 'EUR',
			prefix: '\u20AC'
		},
		decimals: 2,
		category: 'fiat',
		id : 4
	},
	'ETH': {
		symbol: {
			iso4217: null,
			prefix: '\u039E'
		},
		decimals: 18,
		category: 'crypto',
		id : 5
	}
};

const by_id = []; //by_id vai ser um array de objetos

for (c in by_symbol) { //pega as keys do obj
	const id = by_symbol[c].id
	by_id[id] = by_symbol[c] //by_id vai apontar pro obj - faz uma cópia por referencia
	by_id[id].symbol.customary = c //cria a chave customary no obj by_symbol.symbol, que tem o valor c = key 
}

module.exports = {by_symbol, by_id}
