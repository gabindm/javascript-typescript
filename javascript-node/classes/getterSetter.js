const velocity = Symbol("velocidade");

class Car {
  constructor(name) {
    this.name = name;
    this[velocity] = 0;
  }

  acelerar() {
    if (this[velocity] >= 100) return;
    this[velocity]++;
    // console.log(
    //   `${this.name} está acelerando. Velocidade = ${this[velocity}]km/h`
    // );
  }

  freiar() {
    if (this[velocity] <= 0) return;
    this[velocity]--;
    // console.log(
    //   `${this.name} está freiando. Velocidade = ${this[velocity}]km/h`
    // );
  }

  set velocidade(valor) {
    if (typeof valor != "number") return;
    if (valor <= 0 || valor >= 100) return;
    this[velocity] = valor;
  }

  get velocidade() {
    return this[velocity];
  }
}

const c1 = new Car("Gabi's Martch");
console.log(c1);
console.log(c1.velocidade, "\n");

for (let i = 0; i <= 110; i++) c1.acelerar();
c1.freiar();

console.log(c1);
console.log(c1.velocidade, "\n");

c1.velocidade = 40;
console.log(c1);
console.log(c1.velocidade, "\n");
