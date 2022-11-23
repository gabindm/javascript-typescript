@decorator
export class Animal {
  constructor(public cor: string, public especie: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  //tipo é um construtor de classe genérico
  return class extends target {
    cor: string;
    especie: string;

    constructor(...args: any[]) {
      super(...args);
      // this.cor = 'Cor modificada no decorator!';
      this.cor = this.inverte(args[0]);
      this.especie = this.inverte(args[1]);
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

const animal = new Animal('bicolor', 'cachorro');
console.log(animal);

// const AnimalDecorated = decorator(Animal);
// const animal1 = new AnimalDecorated('bicolor', 'cachorro');
// console.log(animal1);
