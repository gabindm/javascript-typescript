//require('rootpath')();
const roman = require('./roman1');

const num = process.argv[2].toUpperCase(); 

for (i=0; i<num.length; i++)
{
	switch (num[i])
	{
		case 'I':
		case 'V':
		case 'X':
		case 'L':
		case 'C':
		case 'D':
		case 'M':
		break;
		
		default: 
			throw 'Letra ou caractere invalido.';
	}
}

console.log(`${num} = ${roman.toArabic(num)}`);

	
