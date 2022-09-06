let a = "A";
let b = "B";
let c = "C";

const inverte = [b, c, a];
[a, b, c] = inverte; //atribuicao via desestruturacao

console.log(a, b, c);

const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [primeiroNumero, segundoNumero, ...resto] = numeros; //atribuicao via desestruturacao
console.log(primeiroNumero, segundoNumero);
console.log(resto);

const n = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [primeiro, , terceiro, , , , setimo] = n; //atribuicao via desestruturacao
console.log(primeiro, terceiro, setimo);

const arrayDeArrays = [
  [1, 2, 3], //indice 0
  [4, 5, 6], //indice 1
  [7, 8, 9], //indice 2
];
//como acessar o valor 6: primeira forma
console.log(arrayDeArrays[1][2]);
//como acessar o valor 6: segunda forma
const [, [, , seis]] = arrayDeArrays;
console.log(seis);
//como acessar o valor 6: terceira forma
const [lista1, lista2, lista3] = arrayDeArrays;
const [, , sexto] = lista2;
console.log(sexto);
//como acessar o valor 6: quarta forma
console.log(lista2[2]);
