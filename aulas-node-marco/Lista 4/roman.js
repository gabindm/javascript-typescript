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

const symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
const values = [1, 5, 10, 50, 100, 500, 1000];

function toArabic(num) 
{
	let result = 0;
	let previous = 0;
	const digits = (num+'').split(''); //se string foi vazia, acrescenta ''
	
	for (digit of digits)
	{
		const i = symbols.indexOf(digit);
		if (i<0) throw 'Letra ou caractere invalido.';
		const v = values[i];
		result = result + v - (v > previous ? 2*previous : 0);
		previous = v;
	}
	
	return result;
}

module.exports = {toArabic, toRoman};