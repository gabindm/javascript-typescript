function funcao() {
  console.log(arguments[0]);
}
funcao("Valor", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

function somatorio() {
  let total = 0;
  for (let n of arguments) {
    total = total + n;
  }
  console.log(total);
}
somatorio(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

function argVazio(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}
argVazio(1, 2, 3);

function somaNaN(a, b) {
  //a = a || 0;
  //b = b || 0;
  console.log(a + b);
}
operacaoNaN(1);

function soma2(a = 0, b = 0) {
  console.log(a + b);
}
soma2(1);

function soma3(a = 0, b = 100, c = 0) {
  console.log(a + b + c);
}
soma3(1, undefined, 4);

function desestruturacaoObj({ nome, sobrenome, idade }) {
  console.log(nome + " " + sobrenome, idade);
}
desestruturacaoObj({ nome: "Gabriela", sobrenome: "Nery", idade: 28 });

function desestruturacaoArray([i0, i1, i2]) {
  console.log(i0 + i1 + i2);
}
desestruturacaoArray([100, 200, 300]);

function calculadora(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador == "+") acumulador += numero;
    if (operador == "-") acumulador = numero;
    if (operador == "/") acumulador /= numero;
    if (operador == "*") acumulador *= numero;
  }
  console.log(`O resultado eh = `, acumulador);
}
calculadora("+", 0, 100, 200, 300);
calculadora("/", 100, 100, 10, 10);

const arrowFunction = (...args) => {
  console.log(args);
};
arrowFunction(1, 2, 3, 4);
