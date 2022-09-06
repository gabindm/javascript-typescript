const pessoas = {
	'Marco': {
		'Nome Completo': 'Marco Carnut',
		'Cidade': 'Recife',
		'Estado': 'PE',
		'Naturalidade': 'Belém/PA',
		'Trabalhos Anteriores': [	
			'Tempest',
			'ZRO Bank'	
		]
	},
	'Ronaldo': {
		'Nome Completo': 'Ronaldo Júnior',
		'Cidade': 'Recife',
		'Estado': 'PE',
		'Naturalidade': 'Recife/PE'
	}
}

console.log(pessoas['Ronaldo']['Nome Completo'])
console.log(pessoas.Ronaldo['Nome Completo']) //se tiver espaço, tem que colocar entre ['']
console.log(pessoas.Marco['Trabalhos Anteriores']) //se tiver espaço, tem que colocar entre ['']
console.log(pessoas.Marco['Trabalhos Anteriores'][0]) //se tiver espaço, tem que colocar entre ['']
