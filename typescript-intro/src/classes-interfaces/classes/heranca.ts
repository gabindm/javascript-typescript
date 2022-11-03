class Pessoa1 {
  constructor(public nome: string, public sobrenome: string, private idade: number, protected cpf: string) {}

  getIdade(): number {
    return this.idade;
  }

  getCPF(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

class Aluno1 extends Pessoa1 {
  getNomeCompleto(): string {
    return `Aluno: ${this.nome} ${this.sobrenome}`;
  }
}

class Cliente1 extends Pessoa1 {
  getNomeCompleto(): string {
    return `Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa1('Gabriela', 'Nery', 28, '872194612');
const aluno = new Aluno1('Kobe', 'Maria', 1, '3124124212');
const cliente = new Cliente1('Bacon', 'Valerio', 2, '423423422');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
