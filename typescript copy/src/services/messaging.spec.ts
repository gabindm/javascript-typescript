/*
import { MessagingProtocol } from '../classes/interfaces/messaging-protocol';

export class Messaging implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }
}

PRECISAMOS TESTAR:
1 - método sendMessage retorna void/undefinied
2 - console.log é chamado 1 vez
3 - console.log imprime 'Mensagem enviada:', msg
*/

import { Messaging } from './messaging'; //importa a classe que vai ser testada

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return void', () => {
    const sut = createSut(); //sut = system under test
    expect(sut.sendMessage('teste')).toBeUndefined();
  });

  it('should call console.log once and with "Mensagem enviada:" and msg', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste'); //tem q rodar esse método para que o console.log seja ativado
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'teste');
  });
});
