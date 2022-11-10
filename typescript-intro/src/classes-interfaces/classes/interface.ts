export interface TipoPessoa {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
}

export interface TipoNome {
  nome: string;
}

export interface TipoSobrenome {
  sobrenome: string;
}

export interface TipoNomeCompleto {
  nomeCompleto(): string;
}

export type TipoPessoa1 = TipoNome & TipoSobrenome & TipoNomeCompleto;

interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

// export class Pessoa implements TipoPessoa {
// export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa1 = new Pessoa('GAbriela', 'NERY');
console.log(pessoa1.nomeCompleto());
