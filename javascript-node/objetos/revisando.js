const generos = {
  marco: "masculino",
  gabriela: "feminino",
  bacon: "macho",
  kobe: "femea",
}; //chaves para declarar objeto
console.log(generos);
console.log(`\n ${generos.gabriela}`);
console.log(`\n ${generos["gabriela"]}`);
//console.log(`\n ${generos[gabriela]}`); // daria erro pois não existe uma variável com esse nome

const gabriela = "kobe";
console.log(`\n ${generos[gabriela]}`); //vai imprimir o genero da chave da variável
console.log(`\n ${generos.gabriela}`); //vai imprimir o genero da chave gabriela
/*------------------------------------------------------*/

const generosArray = [];

generosArray["marco"] = "masculino";
generosArray["gabriela"] = "feminino";
generosArray["bacon"] = "macho";
generosArray["kobe"] = "femea";

console.log(generosArray);

console.log(`\n ${generosArray["gabriela"]}`);
/*------------------------------------------------------*/

function dobro(x) {
  return x * 2;
}

let dobro2 = function (x) {
  return x * 2;
};

const multiplicador = {
  dobro: (x) => x * 2,
  triplo: (x) => x * 3,
  quadruplo: (x) => x * 4,
};

console.log(`O dobro de 2 eh: ${multiplicador.dobro(2)}`);
console.log(`O triplo de 2 eh: ${multiplicador.triplo(2)}`);
console.log(`O quadruplo de 2 eh: ${multiplicador.quadruplo(2)}`);
console.log(`O dobro de 2 eh: ${multiplicador["dobro"](2)}`); //outra forma de chamar o obj
/*------------------------------------------------------*/

function criaUsuario(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
    usuarioCriado() {
      console.log(
        `Usuário criado: ${this.nome} ${this.sobrenome}, de idade ${this.idade}.`
      );
    },
    idadeAtual() {
      console.log(`Minha idade é ${this.idade}.`);
    },
    incrementarIdade() {
      this.idade++;
    },
    anoNascimento() {
      console.log(
        `Ano de nascimento: ${new Date().getFullYear() - this.idade}`
      );
    },
  };
}
const usuario = criaUsuario("Gabriela", "Nery", 28);
usuario.usuarioCriado();
usuario.idadeAtual();
usuario.anoNascimento();
usuario.incrementarIdade();
usuario.idadeAtual();
usuario.anoNascimento();
/*------------------------------------------------------*/

const user = {
  name: "Gabriela",
  lastName: "Medeiros",
  age: 28,
};

for (let chave in user) {
  console.log(chave);
}
for (let chave in user) {
  console.log(user[chave]);
}
/*------------------------------------------------------*/

//new Object()
const dog = new Object();
dog.name = "Bacon";
dog.lastName = "Valerio";
dog.age = 2;
delete dog.age;
console.log(dog);
/*------------------------------------------------------*/

//factory
function createUser(name, lastName) {
  return {
    name,
    lastName,
    get fullName() {
      return `${this.name} ${this.lastName}`;
    },
  };
}

const user1 = createUser("Bacon", "Valerio");
console.log(user1.fullName);
/*------------------------------------------------------*/

//constructor
function User(name, lastName) {
  this.name = name;
  this.lastName = lastName;
  this.fullName = () => `${this.name} ${this.lastName}`;
}

const doguinho = new User("Bacon", "Valerio");
console.log(doguinho);
doguinho.name = "Trufa";
doguinho.lastName = "Maria";
console.log(doguinho);
/*------------------------------------------------------*/

//Object.freeze(objectName)
Object.freeze(doguinho);
doguinho.name = "Kobe"; //não vai alterar
console.log(doguinho);

//Object.freeze(this)
function User(name, lastName) {
  this.name = name;
  this.lastName = lastName;
  this.fullName = () => `${this.name} ${this.lastName}`;
  Object.freeze(this);
}
const pet = new User("Bacon", "Valerio");
pet.name = "Trufa"; //não vai alterar
console.log(pet);
