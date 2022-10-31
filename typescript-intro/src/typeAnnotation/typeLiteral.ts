/* eslint-disable */

let x = 10;
x = 0b1010;

const y = 10;
// y = 0b1010; //daria erro pois y tem o tipo literal 10

let z: 10;
z = 0b1010;

console.log(x, y, z);

let pessoa = {
  nome: 'Gabriela', //tipo = string
  sobrenome: 'Nery', //tipo = string
};
pessoa.nome = 'Bacon';
console.log(pessoa);

let pessoaLiteral = {
  nome: 'Gabriela' as const, //tipo = 'Gabroela'
  sobrenome: 'Nery' as const, //tipo = 'Nery'
};
// pessoaLiteral.nome = 'Bacon'; //daria erro pois 'Bacon' não é do tipo 'Gabriela'
console.log(pessoaLiteral);

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Rosa') {
  return cor;
}
//console.log(escolhaCor('Verde')); //daria erro pois verde n é do tipo vermelho ou amarelo ou rosa

export default 1;
