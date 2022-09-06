const pessoas = [
  { id: 1, nome: "gabi" },
  { id: 3, nome: "bacon" },
  { id: 2, nome: "trufa" },
  { id: 4, nome: "kobe" },
];

/*------ Percorrendo um array de objetos ------*/
const novasPessoas = {};
const novasPessoas1 = {};

for (const { id, nome } of pessoas) {
  //console.log(id, nome);
  novasPessoas[id] = { id, nome };
}
//outra forma de escrever:
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas1[id] = { ...pessoa };
}

console.log(novasPessoas); //nao respeita a ordem de insercao e índices são string
console.log(novasPessoas1, "\n"); //nao respeita a ordem de insercao e índices são string

/*------ Percorrendo um array de objetos com Map() ------*/
const novasPessoas2 = new Map();

for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas2.set(id, { ...pessoa });
}

console.log(novasPessoas2, "\n"); //respeita a ordem de inserção e índices são number
console.log(novasPessoas2.get(2), "\n"); //objeto do índice 2

for (const pessoa of novasPessoas2) {
  console.log(pessoa);
}
console.log("\n");

for (const [i, { id, nome }] of novasPessoas2) {
  console.log(i, id, nome);
}
console.log("\n");

for (const pessoa of novasPessoas2.keys()) {
  console.log(pessoa);
}
console.log("\n");

for (const pessoa of novasPessoas2.values()) {
  console.log(pessoa);
}
console.log("\n");

novasPessoas2.delete(2); //deleta obj de trufa
console.log(novasPessoas2, "\n");
