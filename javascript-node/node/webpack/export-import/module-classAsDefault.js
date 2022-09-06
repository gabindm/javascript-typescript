export const nome = "gabriela";
export const sobrenome = "nery";
export const idade = 28;

export function soma(x, y) {
  return x + y;
}

//export { nome, sobrenome, idade as age, soma };
//module.exports = { nome, sobrenome, idade, soma }; //não dá pra usar alias aqui

export default class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}
