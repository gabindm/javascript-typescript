function toRoman(num)
{
	let unidade = ['', '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
	let dezena = ['', '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
	let centena =	['', '', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
	let milhar = ['', '', 'M', 'MM', 'MMM'];

	const result = [];
	const digits = (num+'').split(''); //vira string e dps array
	let size = digits.length;
	let count = size;
	let aux; 
	
	for (i=0;i<size;i++, count--)
	{
		if (count == 1)
		{ //unidade
				aux = unidade[parseInt(digits[i]) + 1];
				result.push(aux);
		}
		else if (count == 2)
		{ //dezena
				aux = dezena[parseInt(digits[i]) + 1];
				result.push(aux);
		}
		else if (count == 3)
		{ //centena
				aux = centena[parseInt(digits[i]) + 1];
				result.push(aux);
		}
		else if (count == 4)
		{ //milhar
				aux = milhar[parseInt(digits[i]) + 1];
				result.push(aux);
		}
	}
	
	return result.join(''); //retorna string 
}

const symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
const values = [1, 5, 10, 50, 100, 500, 1000];

function toArabic(num)  
{
	let result = 0;
	let previous =0;
	const digits = num.split(''); 
	let count = 0; //conta quantas vezes repetidas o digito aparece. maximo valido = 3
	
	for (digit of digits) 
	{
		const i = symbols.indexOf(digit); 
		const v = values[i]; 
		
		if (previous == v && count < 2)
		{
			 count++;
		}
		else if (previous == v && count == 2)
		{
			throw 'Número romano inválido.';
		}
		else 
		{
			count = 0; 
		}
		
		result = result + v - (v > previous ? 2*previous : 0); 
		previous = v; 
	}
	
	return result;
}

module.exports = {toArabic, toRoman};