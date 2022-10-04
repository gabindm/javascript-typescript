function fix_space(wrong_name)
{
	let right_name = wrong_name;
	let space = 0;
	
	for (i=0; i<right_name.length; i++)
	{	
		if(right_name[i] == ' ' && space == 0)
		{ 
			space=1;
		}
		else if (right_name[i] == ' ' && space == 1)
		{ 
			right_name[i] = '?';
		}
		else 
		{
			space = 0;
		}
	}

	right_name = right_name.join(""); //string de novo 

	while (right_name != right_name.replace("?", "")) 
	{
		right_name = right_name.replace("?", "");
	}

	return right_name;
}

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


const name_array = process.argv.slice(2); 	//name é um array
const name_string = name_array.join(" ");   //name_string é uma string 
let new_name = name_string.split(""); 		//array de novo
let fixed_name = fix_space(new_name);


console.log(`Nome original: ${name_array}`);
console.log(`Nome quase embelezado: ${fixed_name}`);
console.log(`Nome embelezado: ${proper_name(fixed_name)}`);
