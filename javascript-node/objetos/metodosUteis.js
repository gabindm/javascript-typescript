const produto = {
  nome: "Caneca",
  preco: 10.5,
};

const produto1 = Object.assign({}, produto);
//seria o mesmo que escrever:
//const produto1 = { ...produto }; //deep copy
//const produto1 = {nome: produto.nome, preco: produto.preco}

produto1.nome = "Camiseta";
produto1.preco = 79.9;

console.log(produto, "\n", produto1);
console.log(Object.keys(produto));
console.log(Object.values(produto));
console.log(Object.getOwnPropertyDescriptor(produto, "nome"));
/*---------------------------------------------------*/

console.log(Object.entries(produto));
for (entry of Object.entries(produto)) {
  console.log(entry);
}
for ([chave, valor] of Object.entries(produto)) {
  //destructor
  console.log(`${chave} = ${valor}`);
}
