function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}

const p1 = criaPessoa("Gabriela", "Nery");
console.log(p1);
/* ---------------------------------------- */

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }
  return falaResto;
}
const olaMundo = falaFrase("Hello"); //olaMundo retorna funcao falaResto
console.log(olaMundo("World!"));
/* ---------------------------------------- */

function criaMultiplicador(multiplicador) {
  return (n) => multiplicador * n;
}

const duplica = criaMultiplicador(2); //retorna uma função que precisa de argumento
console.log(duplica(3));
