// para que utilize outros módulos que estão na mesma pasta:
var soma_result = require ("./somar"); 
var subtracao_result = require ("./subtrair");
var multiplicacao_result = require ("./multiplicar");
var divisao_result = require ("./dividir");

console.log("O resultado eh: " + soma_result(1,-2));
console.log("O resultado eh: " + subtracao_result(-1,2));
console.log("O resultado eh: " + multiplicacao_result(-1,2));
console.log("O resultado eh: " + divisao_result(1,-2));
console.log("O resultado eh: " + divisao_result(1,0));