type ObterChave = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChave = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'tricolor',
  vacinas: ['V8', 'Gripe', 'Raiva'],
  idade: 2,
};

console.log(obterChave(animal, 'vacinas'));
