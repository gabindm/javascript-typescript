export class Pessoa {
  constructor(private nome: string, private sobrenome: string, private idade: number, private _cpf: string) {}

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }

  set cpf(newCPF: string) {
    this._cpf = newCPF;
  }
}

const pessoa = new Pessoa('Gabriela', 'Nery', 28, '872.194.612-34');
console.log(pessoa.cpf);
pessoa.cpf = '111.111.111-11';
console.log(pessoa.cpf);
