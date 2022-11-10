export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  // inserirProduto(produto: Produto): void {
  //   this.produtos.push(produto);
  // }

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidade(): number {
    return this.produtos.length;
  }

  total(): number {
    // let total = 0;
    // for (const produto of this.produtos) {
    //   total += produto.preco;
    // }

    // return total;

    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
}

const produto1 = new Produto('camisa', 50.0);
const produto2 = new Produto('calcinha', 20.0);
const produto3 = new Produto('short', 80.0);

const carrinho = new CarrinhoDeCompras();
console.log(carrinho);
//carrinho.inserirProduto(produto1);
carrinho.inserirProdutos(produto1, produto2, produto3);
console.log(carrinho);
console.log(carrinho.quantidade());
console.log(carrinho.total());
