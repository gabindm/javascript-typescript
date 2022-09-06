
class Device {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log("dispositivo já está ligado");
      return;
    }
    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log("dispositivo já está desligado");
      return;
    }
    this.ligado = false;
  }
}

class Smartphone extends Device {
  constructor(nome, cor, modelo) {
    super(nome); //calls construtores da classe mae

    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends Smartphone {
  constructor(nome, temWifi) {
    super(nome); //calls construtores da classe mae

    this.temWifi = temWifi;
  }

  ligar() {
    console.log("Voce alterou o metodo ligar para Tablet.");
  }
}
const d1 = new Device("SmartWatch");
d1.ligar();
console.log(d1, "\n");

const s1 = new Smartphone("iPhone", "preto", "XR");
s1.ligar();
console.log(s1, "\n");

const t1 = new Tablet("iPad", true);
t1.ligar();
console.log(t1);
