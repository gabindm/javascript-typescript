const objetoA: Record<string, unknown> = {
  chaveA: 'ValorA',
  chaveB: 'ValorB',
};

objetoA.chaveA = 'Outro valor';
console.log(objetoA);

const objetoB: {
  chaveA: string;
  chaveB: string;
} = {
  chaveA: 'ValorA',
  chaveB: 'ValorB',
};

objetoB.chaveA = 'Outro valor';
console.log(objetoB);

const objetoC: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'ValorA',
  chaveB: 'ValorB',
};
objetoC.chaveD = 'Nova chave!';
console.log(objetoC);

const objetoD: {
  readonly chaveA: string;
  chaveB: string;
} = {
  chaveA: 'ValorA',
  chaveB: 'ValorB',
};

//objetoD.chaveA = 'Outro valor';
console.log(objetoD);
