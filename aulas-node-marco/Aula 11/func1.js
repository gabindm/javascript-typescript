a = [1,2,3]

function maisum(x) {
    return x+1
}

console.log(a.map(maisum)) //map fazer com que o argumento haja em todos os elementos do array 
console.log(a) //o valor de a não foi alterado
console.log(a.map(function(x) {return x+1})) //funcao sem nome
console.log(a.map(x => {return x+1})) //funcao sem nome
console.log(a.map(x => x+1)) //funcao sem nome
console.log(a.map(x => x*2))


