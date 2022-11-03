class Pessoa2 {
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

class Aluno2 extends Pessoa2 {
  constructor(nome: string, sobrenome: string, idade: number, cpf: string, public sala: string) {
    super(nome, sobrenome, idade, cpf);
    this.sala = sala;
  }

  getNomeCompleto(): string {
    return `Aluno: ${super.getNomeCompleto()}`;
  }
}

class Cliente2 extends Pessoa2 {
  getNomeCompleto(): string {
    return `Cliente: ${super.getNomeCompleto()}`;
  }
}

const pessoa1 = new Pessoa2('Gabriela', 'Nery', 28, '872294622');
const aluno1 = new Aluno2('Kobe', 'Maria', 2, '3224224222', '3F');
const cliente1 = new Cliente2('Bacon', 'Valerio', 2, '423423422');

console.log(pessoa1.getNomeCompleto());
console.log(aluno1.getNomeCompleto());
console.log(cliente1.getNomeCompleto());
