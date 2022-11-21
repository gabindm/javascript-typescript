/**
 * Interface com generics
 */

interface PessoaProtocolo<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno: PessoaProtocolo<string, number> = {
  nome: 'Gabriela',
  sobrenome: 'Nery',
  idade: 29,
};
console.log(aluno);

/**
 * Outra forma de escrever interface com generics
 */

interface PessoaProtocolo1<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo1 = {
  nome: 'Gabriela',
  sobrenome: 'Nery',
  idade: 29,
};
console.log(aluno1);

/**
 * Type alias com generics
 */

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno2: PessoaProtocolo2 = {
  nome: 'Gabriela',
  sobrenome: 'Nery',
  idade: 29,
};
console.log(aluno2);

/**
 * Outra forma de escrever type alias com generics
 */

type PessoaProtocolo3<T, U> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno3: PessoaProtocolo3<string, number> = {
  nome: 'Gabriela',
  sobrenome: 'Nery',
  idade: 29,
};
console.log(aluno3);
