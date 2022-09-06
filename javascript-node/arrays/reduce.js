const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//some todos os numeros (reduce)
const initialValue = 0;
const sumWithInitial = numeros.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
console.log(sumWithInitial);
//outra forma de escrever:
const total = numeros.reduce((acumulador, valor, indice, array) => {
  acumulador += valor;
  return acumulador;
}, 0);
console.log(total);
/*--------------------------------------------------------*/

//retorne um array com os numeros pares(filter)
console.log(numeros.filter((x) => x % 2 == 0));

//retorne um array com os numeros pares(reduce)
console.log(
  numeros.reduce((acumulador, valor) => {
    if (valor % 2 == 0) {
      acumulador.push(valor);
    }
    return acumulador;
  }, [])
);

/*--------------------------------------------------------*/

//retorne um array com o dobro dos valores (map)
console.log(numeros.map((x) => x * 2));

//retorne um array com o dobro dos valores (reduce)
console.log(
  numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2);

    return acumulador;
  }, [])
);
/*--------------------------------------------------------*/

//retorne a pessoa mais velha
const pessoas = [
  { nome: "gabi", idade: 28 },
  { nome: "bruna", idade: 29 },
  { nome: "bella", idade: 27 },
  { nome: "bacon", idade: 2 },
  { nome: "kobe", idade: 1 },
];
console.log(
  pessoas.reduce((previousValue, nextValue) => {
    if (previousValue.idade > nextValue.idade) return previousValue;
    else return nextValue;
  }) //não vamos passar um valor inicial
);

/*--------------------------------------------------------*/

//retorne a soma do dobro de todos os pares
const n = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

console.log(
  n
    .filter((x) => x % 2 == 0)
    .map((x) => x * 2)
    .reduce((acumulador, valor) => (acumulador += valor), 0)
);
