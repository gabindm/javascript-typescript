enum Cores {
  VERMELHO,
  AZUL,
  AMARELO,
}

console.log(Cores);
console.log(Cores.AMARELO);
console.log(Cores[2]);

enum Cores1 {
  VERMELHO = 10,
  AZUL = 20,
  AMARELO = 30,
}

console.log(Cores1);
console.log(Cores1.AMARELO);
console.log(Cores1[2]);
