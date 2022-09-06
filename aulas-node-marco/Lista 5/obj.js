const generos = { 'marco': 'masculino', 'gabriela': 'feminino', 'bacon': 'macho', 'kobe': 'femea'} //chaves para declarar objeto

console.log(generos)

console.log(`\n ${generos.gabriela}`)
console.log(`\n ${generos['gabriela']}`)
//.log(`\n ${generos[gabriela]}`) daria erro porque considera gabriela como variável e não existe essa variiável

gabriela = 'kobe'

console.log(`\n ${generos[gabriela]}`) //vai imprimir o genero da chave da variável
console.log(`\n ${generos.gabriela}`) //vai imprimir o genero da chave gabriela

