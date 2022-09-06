// module.exports = class Cachorro {
//   constructor(nome) {
//     this.nome = nome;
//   }

//   latir() {
//     console.log(`${this.nome} está latindo: au au`);
//   }
// };

class Cachorro {
  constructor(nome) {
    this.nome = nome;
  }

  latir() {
    console.log(`${this.nome} está latindo: au au`);
  }
}

module.exports = Cachorro;
