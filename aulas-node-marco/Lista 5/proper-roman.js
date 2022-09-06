const roman = require('./roman2');

function proper_name(full_name)
{
	const result = [] //array
	const names = full_name.toLowerCase().split(" ") //full_name em minusculas e dps vira array
	//split(/ * /) eh uma expressao regular que elimina espaços e tambem funcionaria
	
	for(let name of names) //cada interacao eh um nome 
	{
        switch(name)
		{
			case '': continue // dessa forma também funcionaria 
			case 'de':
			case 'do':
			case 'da':
			case 'dos':
			case 'das':
			break;
			
			default:
				//slice funciona em strings tambem
                if (name[1] == "'") {
                    name = name[0].toUpperCase() + name[1] + name[2].toUpperCase() + name.slice(3) //nome com apostrofo
                }
                else {
				    name = name[0].toUpperCase() + name.slice(1) //primeira letra maiuscula
                }				
                break;
		}
		
		result.push(name); //insere o nome no array result
	}

    const ultimo_nome = result.pop()

    try {
        const ultimo_nome_upper = ultimo_nome.toUpperCase()
        if (roman.toRoman(roman.toArabic(ultimo_nome_upper)) == ultimo_nome_upper) { //se nome for conversível pra número, ele segue as instrucoes do try. mas se nao for conversivel, vai retornar throw e ir pro catch
            result.push(ultimo_nome_upper)
       }
    }
    catch(e) {
	    result.push(ultimo_nome)
    }

	return result.join(" "); //result agora eh uma string
}


const name = process.argv.slice(2).join(" ") //name é um array, e apos o join, vira string
console.log(`Nome original: ${name}`)
console.log(`Nome embelezado: ${proper_name(name)}`)
