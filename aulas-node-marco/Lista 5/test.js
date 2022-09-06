const s2v = { //symbols to values
	'I': 1,
	'V': 5,
	'X': 10,
	'L': 50,
	'C': 100,
	'D': 500,
	'M': 1000
};

/*for (chave in s2v) {
	console.log(chave)
	console.log(s2v[chave])
}*/

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);}

console.log(getKeyByValue(s2v, 1000))