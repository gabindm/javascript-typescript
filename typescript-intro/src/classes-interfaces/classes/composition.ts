export class Carro {
  private readonly motor: Motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  frear(): void {
    this.motor.frear();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor está ligado.');
  }

  acelerar(): void {
    console.log('Motor está acelerando.');
  }

  frear(): void {
    console.log('Motor está freando.');
  }
}

const carro1 = new Carro();
carro1.ligar();
