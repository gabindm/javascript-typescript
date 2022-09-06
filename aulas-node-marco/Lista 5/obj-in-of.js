const a = {
	'um': 'I',
	'dois': 'II',
	'tres': 'III',
	'quatro': 'IV'
}

for (item in a)
	console.log(item) //in pega índice de array e key do obj. funciona ok
	
for (item of a)
	console.log(item) //of pega o valor no índice do array mas n funciona com obj?