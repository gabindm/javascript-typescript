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
/*-------------------------------------------------------*/

//criando um herdeiro de Produto:
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
//dessa forma, o constructor de camiseta passa a ser produto
Camiseta.prototype.constructor = Camiseta;
//agora, o constructor de camiseta passa a ser camiseta

const produto1 = new Produto("shorts", 60);
const camiseta1 = new Camiseta("regata", 40, "branco");
camiseta1.aumento(10);
console.log(produto1, "\n", camiseta1);
/*-------------------------------------------------------*/

//vamos alterar o aumento de Camiseta só para checar a hierarquia
Camiseta.prototype.aumento = function (percentual100) {
  this.preco *= 1 + (percentual100 * 10) / 100;
};

//Camiseta.aumento -> Produto.aumento
camiseta1.aumento(10);
console.log(camiseta1);
/*-------------------------------------------------------*/

//criando um herdeiro de Produto:
function Caneca(nome, preco, material) {
  Produto.call(this, nome, preco);
  this.material = material;
}

Caneca.prototype = Object.create(Produto.prototype);
//dessa forma, o constructor de caneca passa a ser produto
Caneca.prototype.constructor = Caneca;
//agora, o constructor de caneca passa a ser caneca

const caneca1 = new Caneca("caneca", 10, "porcelana");
caneca1.aumento(10);
caneca1.material = "plástico";
console.log(caneca1);
/*-------------------------------------------------------*/
