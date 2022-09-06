function terminaComA(nomes) {
    if(nomes.endsWith('a')) 
        return true
    else 
        return false   
}

const nomes = ['bruna', 'bella', 'gabi', 'valerio']

console.log(nomes.filter(terminaComA))

//outra forma de escrever: 
console.log(nomes.filter(x => x.endsWith('a')))

//outra forma de escrever:
let termina_com_a = x => x.endsWith('a')

console.log(nomes.filter(termina_com_a))
