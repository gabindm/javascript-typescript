const numeros = [12, 5, 8, 130, 44, 10, 1, 2, 3, 100, 200];
//dobrar os numeros
console.log(numeros.map((value) => value * 2));
/*--------------------------------------------------------*/

const pessoas = [
  { nome: "gabi", idade: 28 },
  { nome: "bruna", idade: 29 },
  { nome: "bella", idade: 27 },
  { nome: "bacon", idade: 2 },
  { nome: "kobe", idade: 1 },
];
//retonar apenas uma string com o nome da pessoa
console.log(pessoas.map((x) => x.nome));

//remova a chave nome do obj
console.log(
  pessoas.map((x) => {
    delete x.nome;
    return x;
  })
);

//adicione uma chave id em cada obj
console.log(
  pessoas.map((x, indice) => {
    x.id = indice;
    return x;
  })
);
