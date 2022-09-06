const roman = require('./roman2');
let tudo_ok = true;

for (i=0; i<=3999; i++)
{
	if (roman.toArabic(roman.toRoman(i)) != i)
	{
		tudo_ok = false;
		
		console.log(`Numero de teste: ${i}`);
		console.log(`De arabico para romano = ${roman.toRoman(i)}`);
		console.log(`De romano para arabico = ${roman.toArabic(roman.toRoman(i))}`);
	}
}

if (tudo_ok)
{ 
	console.log("Todos os numeros de 0 a 3999 estao corretos!");
}
