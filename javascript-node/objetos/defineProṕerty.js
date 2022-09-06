function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true, //mostra a chave
    value: estoque, //valor, que pode ser uma função
    writable: true, //poder alterar a chave
    configurable: false, //configurável
  });
  Object.defineProperties(this, {
    nome: {
      enumerable: true, //mostra a chave
      value: nome, //valor, que pode ser uma função
      writable: true, //poder alterar a chave
      configurable: false, //configurável
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: false,
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
p1.estoque = 100; //se writable fosse false, esse valor não seria reescrito
delete p1.estoque; //como configurable é false, não vai poder ser apagada
console.log(p1);
