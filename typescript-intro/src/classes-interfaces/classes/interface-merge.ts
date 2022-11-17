export interface Pessoa {
  nome: string;
}

export interface Pessoa {
  sobrenome: string;
}

export interface Pessoa {
  idade?: string;
}

const pessoa: Pessoa = {
  nome: 'Gabriela',
  sobrenome: 'Nery',
};

console.log(pessoa);
