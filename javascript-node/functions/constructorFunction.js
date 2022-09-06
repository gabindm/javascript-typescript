function Pessoa(nome, sobrenome) {
  //atributos/métodos privados
  const id = 2938;
  const metodoInterno = () => {
    console.log("eu sou privado rs");
  };

  //atributos/métodos publicos
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.falaOi = () => console.log(`${this.nome}, fala Oi!`);
}

const p1 = new Pessoa("Gabriela", "Nery");
const p2 = new Pessoa("Bacon", "Valerio");

console.log(p1, p2);
console.log(p1.falaOi());
console.log(p1.id, p1.metodoInterno); //vai retornar undefinied pois é privado
