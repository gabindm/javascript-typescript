const nome = "Gabriela";
const obj = { nome };
const outroObj = { ...obj };
console.log(outroObj);

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

let pessoa1 = new Pessoa();
