class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  //métodos de instância
  aumentarVolume() {
    if (this.volume >= 100) {
      console.log("tv já está no volume máximo");
      return;
    }
    this.volume += 2;
  }

  abaixarVolume() {
    if (this.volume <= 0) {
      console.log("tv já está no volume mínimo");
      return;
    }
    this.volume -= 2;
  }

  //métodos estáticos
  static trocaPilha() {
    //quero trocar a pilha de todos os controles
    console.log("Pilhas de todos os controles remotos trocadas!");
  }
}

const c1 = new ControleRemoto("LG");
while (c1.volume < 100) c1.aumentarVolume(); //volume = 100
c1.abaixarVolume();
console.log(c1, "\n");

ControleRemoto.trocaPilha(); //nao poderiamos chamar o método através da instancia c1.
