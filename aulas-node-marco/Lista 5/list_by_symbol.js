const currencies = require('./currencies')

for (c in currencies.by_symbol) //in pega key do obj
	console.log(c)

//para listar os values, seria: 
//for (c of Object.values(currencies.by_symbol)) 
//	console.log(c)
	
//outra forma para listar os values, seria: 
//for (c in currencies.by_symbol) //in pega key do obj
//	console.log(currencies.by_symbol[c])
