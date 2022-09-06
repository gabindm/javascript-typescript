const table = [
	['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
	['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
	['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
	['', 'M', 'MM', 'MMM']	
];

function toRoman(num)
{
	const result = [];
	const digits = (num+'').split(''); //se string foi vazia, acrescenta ''
	
	for (item of table)
	{
		const i = digits.pop();
		result.unshift(item[i])
	}
	
	return result.join('');
}

const s2v = { //symbols to values
	'I': 1,
	'V': 5,
	'X': 10,
	'L': 50,
	'C': 100,
	'D': 500,
	'M': 1000
};

function toArabic(num) //num é string XXI
{
	let result = 0;
	let previous = 0;
	const digits = (num+'').split(''); //se string foi vazia, acrescenta ''
	//digits é array
	
	for (digit of digits)
	{
		try {
			if (s2v[digit] == null) {
				throw 'Letra ou caractere invalido.';
			}
		}
		
		catch (e) {
			console.log(e);
		}
		
		for (chave in s2v) {
			if (chave == digit) {
				const i = s2v[chave]
				result = result + i - (i > previous ? 2*previous : 0);
				previous = i;
			}
		}
	}
	
	return result
}
module.exports = {toArabic, toRoman};