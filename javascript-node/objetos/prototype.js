function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.falaOi = function () {
  console.log(`${this.nome} ${this.sobrenome} está falando Oi!`);
};

const p1 = new Pessoa("Gabriela", "Nery");

p1.falaOi();

// Pessoa.prototype === p1.__proto__
// Hierarquia para procurar um método:
// p1 --> Pessoa.prototype --> Object.prototype
/* ---------------------------------------------------- */

//new Object -> Object.prototype
const objA = {
  chaveA: "A",
  // __proto__: Object.prototype
};

const objB = {
  chaveB: "B",
  // __proto__: objA
};

Object.setPrototypeOf(objB, objA);
console.log(objB.chaveB, objB.chaveA);
/* ---------------------------------------------------- */

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco *= 1 - percentual / 100;
};
Produto.prototype.aumento = function (percentual) {
  this.preco *= 1 + percentual / 100;
};

const produto1 = new Produto("camiseta", 50);
produto1.desconto(10);
produto1.aumento(20);
console.log(produto1);

//Literal
const produto2 = {
  nome: "caneca",
  preco: 10,
};
Object.setPrototypeOf(produto2, Produto.prototype);
produto2.desconto(10);
console.log(produto2);

//Object.create(Object.prototype, {keys: {values}})
const produto3 = Object.create(Produto.prototype);
produto3.nome = "shorts";
produto3.preco = 60;
produto3.desconto(30);
console.log(produto3);

//Object.create(Object.prototype, {keys: {values}})
const produto4 = Object.create(Produto.prototype, {
  nome: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: "sandalia",
  },
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 120,
  },
});
produto4.desconto(10);
console.log(produto4);
