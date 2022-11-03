/**
 * Método estático
 */
export class Pessoa1 {
  constructor(public nome: string, public sobrenome: string, public idade: number, public cpf: string) {}

  static falaOi(): void {
    console.log('Oi!');
  }
}

const pessoa1 = new Pessoa1('Gabriela', 'Nery', 28, '872.194.612-34');
// console.log(pessoa.falaOi()); //daria erro pois não pode ser acessado por uma instancia da classe.
Pessoa1.falaOi();

/**
 * Método estático
 */
export class Pessoa2 {
  constructor(public nome: string, public sobrenome: string, public idade: number, public cpf: string) {}

  static criaPessoa(nome: string, sobrenome: string): Pessoa2 {
    return new Pessoa2(nome, sobrenome, 0, '000.000.000-00');
  }
}

const pessoa2 = Pessoa2.criaPessoa('Gabriela', 'Nery');
console.log(pessoa2);

/**
 * Atributo estático
 */
export class Pessoa3 {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';
  constructor(public nome: string, public sobrenome: string, public idade: number, public cpf: string) {}

  static criaPessoa(nome: string, sobrenome: string): Pessoa3 {
    return new Pessoa3(nome, sobrenome, Pessoa3.idadePadrao, Pessoa3.cpfPadrao);
  }
}

const pessoa3 = Pessoa3.criaPessoa('Bacon', 'Valerio');
console.log(pessoa3);
