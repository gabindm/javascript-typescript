function Produto(nome, preco, estoque) {
  //constructor
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true, //mostra a chave
    configurable: false, //configurável
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor != "number") {
        throw "Valor para estoque inválido.";
      }
      estoquePrivado = valor;
      console.log("Estoque alterado com sucesso.\n");
    },
  });
}

function criaProduto(nome) {
  //factory
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      nome = valor;
    },
  };
}

const p1 = new Produto("Camiseta", 20, 3);
// p1.estoque = 'dsjfdj'; //lançaria o erro
p1.estoque = 100;
delete p1.estoque; //como configurable é false, não vai poder ser apagada
console.log(p1, "\n");

const p2 = criaProduto("Camiseta");
console.log(p2);
