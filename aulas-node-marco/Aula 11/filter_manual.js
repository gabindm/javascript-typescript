function myFilter (funcao, argumento) {
    let result = []
    
    for(item of argumento) {
        if (funcao(item) >= 0) {
            result.push(item)       
        }
    }

    return result
}

function nomeComposto (nome) {
    return nome.indexOf(' ') 
}

let cidades = ['recife', 'sao paulo', 'joao pessoa', 'maceio']


//console.log(nomeComposto(cidades[0]))
console.log(myFilter(nomeComposto, cidades))

//outra forma de escrever a funcao
let nomeComposto1 = x => x.indexOf(' ')
console.log(myFilter(nomeComposto1, cidades))
