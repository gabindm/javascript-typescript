function proper_name(full_name)
{
	const result = [] //array
	const lower_full_name = full_name.toLowerCase() //full_name em minusculas
	const names = lower_full_name.split(" "); //full_name agr eh um array
	
	for(let name of names) //cada interacao eh um nome 
	{
		switch(name)
		{
			case 'de':
			case 'do':
			case 'da':
			case 'dos':
			case 'das':
			break;
			
			default:
				//slice funciona em strings tambem
				name = name[0].toUpperCase() + name.slice(1) //primeira letra maiuscula
				break;
		}
		
		result.push(name); //insere o nome no array result
	}
	
	return result.join(" "); //result agora eh uma string
}


const name = process.argv.slice(2).join(" ") //name é um array, e apos o join, vira string
console.log(`Nome original: ${name}`);
console.log(`Nome embelezado: ${proper_name(name)}`);