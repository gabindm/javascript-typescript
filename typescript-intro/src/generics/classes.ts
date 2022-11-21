/**
 * Generics em classes
 */

export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

const pessoa1 = new Pessoa('Gabriela', 29);
console.log(pessoa1);

const pessoa2 = new Pessoa(['Gabriela'], 29);
console.log(pessoa2);

const pessoa3 = new Pessoa('Gabriela', 'vinte e nove');
console.log(pessoa3);

/**
 * Generics em classes com stack (pilha)
 */

export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }

  tamanho(): number {
    return this.contador;
  }

  mostrarPilha(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

const pilha = new Pilha<number | string>();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push('qualquer coisa');
console.log(`Tamanho: ${pilha.tamanho()}`);
pilha.mostrarPilha();

while (!pilha.isEmpty()) {
  pilha.pop();
}
console.log(`Tamanho: ${pilha.tamanho()}`);
pilha.mostrarPilha();
