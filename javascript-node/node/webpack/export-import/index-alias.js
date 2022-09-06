import {
  nome,
  sobrenome as lastName,
  age,
  soma,
  Pessoa as Cachorro,
} from "./module-alias";

console.log(nome, lastName, age, soma(age, 1));

const c1 = new Cachorro("Bacon", "Valerio");

console.log(c1);
