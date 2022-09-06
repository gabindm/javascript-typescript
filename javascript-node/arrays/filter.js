function maiorQue10(value, indice, array) {
  //console.log(value, indice, array);
  return value >= 10;
}
const numeros = [12, 5, 8, 130, 44];
console.log(numeros.filter(maiorQue10));

//forma simplificada:
console.log(numeros.filter((x) => x > 10));
/*--------------------------------------------------------*/

function terminaComA(nomes) {
  if (nomes.endsWith("a")) return true;
  else return false;
}
const nomes = ["bruna", "bella", "gabi", "valerio"];
console.log(nomes.filter(terminaComA));
/*--------------------------------------------------------*/

const nomes1 = ["bruna", "bella", "gabi", "valerio"];
console.log(nomes1.filter((x) => x.endsWith("a")));
/*--------------------------------------------------------*/

const nomes2 = ["bruna", "bella", "gabi", "valerio"];
const termina_com_a = (x) => x.endsWith("a");
console.log(nomes2.filter(termina_com_a));
/*--------------------------------------------------------*/

const pessoas = [
  { nome: "gabi", idade: 28 },
  { nome: "bruna", idade: 29 },
  { nome: "bella", idade: 27 },
  { nome: "bacon", idade: 2 },
  { nome: "kobe", idade: 1 },
];
//retornar pessoas com nome >4 caracteres
console.log(pessoas.filter((x) => x.nome.length > 4));

//retornar pessoas menores de idade
console.log(pessoas.filter((x) => x.idade < 18));

//retornar pessoas cujo nome termina com 'a'
console.log(pessoas.filter((x) => x.nome.toLowerCase().endsWith("a")));
/*--------------------------------------------------------*/

//escrevendo uma funcao filter manualmente para filtrar nomes compostos
let cidades = ["recife", "sao paulo", "joao pessoa", "maceio"];

function nomeComposto(nome) {
  return nome.indexOf(" "); //se não for composto, retorna -1
}

function myFilter(funcao, array) {
  let result = [];

  for (item of array) {
    if (funcao(item) >= 0) {
      result.push(item);
    }
  }

  return result;
}

//console.log(nomeComposto(cidades[0]))
console.log(myFilter(nomeComposto, cidades));

//outra forma de escrever a funcao
let nomeComposto1 = (x) => x.indexOf(" ");
console.log(myFilter(nomeComposto1, cidades));
