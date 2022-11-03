// Visa passar características de um objeto para outro.

export abstract class Animal {
  constructor(public name: string) {}
  abstract makeNoise(): void;
}

export class Dog extends Animal {
  makeNoise(): void {
    console.log(`${this.name} está fazendo auau.`);
  }
}

export class Cat extends Animal {
  makeNoise(): void {
    console.log(`${this.name} está fazendo miau.`);
  }
}

// const dog = new Dog('Bacon');
// dog.makeNoise();
