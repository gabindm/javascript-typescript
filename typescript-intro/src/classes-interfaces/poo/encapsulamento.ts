//Visa ocultar partes internas de um objeto e exibir apenas o necessário para uso externo.

export class RemoteControl {
  constructor(private powerStatus = false) {}

  public turnOn(): void {
    this.powerStatus = true;
  }
  public turnOff(): void {
    this.powerStatus = false;
  }
  public getStatus(): boolean {
    return this.powerStatus;
  }
}
