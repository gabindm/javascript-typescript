//Permite isolar de um objeto somente os conceitos que são necessários para o funcionamento do programa.

export class Pessoa {
  private nome: string;
  private sobrenome: string;

  constructor(nome: string, sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}
