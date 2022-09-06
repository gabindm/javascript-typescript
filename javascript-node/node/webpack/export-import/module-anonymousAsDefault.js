const nome = "gabriela";
const sobrenome = "nery";
const idade = 28;

function soma(x, y) {
  return x + y;
}

export default (x, y) => x * y;

export { nome, sobrenome, idade, soma };
//module.exports = { nome, sobrenome, idade, soma }; //não dá pra usar alias aqui

export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}
