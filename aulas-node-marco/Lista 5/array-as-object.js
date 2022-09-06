const a = [1,2,3,4,5]

a[9] = 'oito'
a[-1] = 'menos um'

for (iten of a)
{
	console.log(`Tenho um item: ${iten}`)
	
}

console.log(`Tamanho do array: ${a.length}`)