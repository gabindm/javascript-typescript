// export type TipoPessoa = {
//   nome: string;
//   sobrenome: string;
//   nomeCompleto(): string;
// };

export type TipoNome = {
  nome: string;
};

export type TipoSobrenome = {
  sobrenome: string;
};

export type TipoNomeCompleto = {
  nomeCompleto(): string;
};

export type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;

// export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa1 = new Pessoa('GAbriela', 'NERY');
console.log(pessoa1.nomeCompleto());
