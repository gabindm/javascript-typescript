let a = [1,2,3]
let b = [...a]
a.push(4)
console.log(a,b)

let c = {
    nome: 'gabriela',
    sobrenome: 'nery'
}
let d = {...c}
c.nome = 'bacon'
c.sobrenome = 'valerio'
console.log(c,d)