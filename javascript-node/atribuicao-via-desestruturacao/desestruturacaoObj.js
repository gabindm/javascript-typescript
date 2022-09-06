const pessoa = {
  nome: "Gabriela",
  sobrenome: "Nery",
  idade: 28,
  endereco: {
    rua: "Rua Gal Americano Freire",
    numero: 528,
  },
};

const {
  nome,
  idade,
  endereco: { rua, numero },
} = pessoa; //cria const com mesmo nome da chave
console.log(nome, idade, rua, numero);

//renomeando a variavel:
const {
  nome: firstName,
  idade: age,
  endereco: { rua: street, numero: number },
} = pessoa;
console.log(firstName, age, street, number);
