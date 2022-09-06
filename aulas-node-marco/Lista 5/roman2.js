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
        const v = s2v[digit]
        if (!v) //se v nao corresponder a nenhuma chave do obj
            throw 'Letra ou caractere inválido'
        result = result + v - (v > previous ? 2*previous : 0);
		previous = v;
	}
	
	return result
}
module.exports = {toArabic, toRoman};
