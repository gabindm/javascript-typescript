const fullName = {
  fullName() {
    return `${this.name} ${this.lastName}`;
  },
};

const comer = {
  comer() {
    return `${this.name} ${this.lastName} esta comendo.`;
  },
};

const beber = {
  beber() {
    return `${this.name} ${this.lastName} esta bebendo.`;
  },
};

const falar = {
  falar() {
    return `${this.name} ${this.lastName} esta falando.`;
  },
};

const userPrototype = { ...fullName, ...comer, ...beber, ...falar };
//podedia ser escrito também:
//const userPrototype = Object.assign({}, fullName, comer, beber, falar);

function createUser(name, lastName) {
  return Object.create(userPrototype, {
    name: { value: name },
    lastName: { value: lastName },
  });
}

const user1 = createUser("Bacon", "Valerio");
console.log(user1.comer());
