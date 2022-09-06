class User {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  get fullName() {
    console.log(`${this.name} ${this.lastName}`);
  }

  set fullName(valor) {
    valor = valor.split(" ");
    this.name = valor.shift();
    this.lastName = valor.join(" ");
  }

  comer() {
    console.log(`${this.name} ${this.lastName} esta comendo.`);
  }

  beber() {
    console.log(`${this.name} ${this.lastName} esta bebendo.`);
  }

  falar() {
    console.log(`${this.name} ${this.lastName} esta falando.`);
  }
}

const u1 = new User("gabi", "nery");

console.log(u1);
u1.comer();
console.log("\n");

u1.fullName;
u1.fullName = "Bacon Valerio";
u1.fullName;
