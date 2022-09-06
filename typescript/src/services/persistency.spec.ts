/* import { PersistencyProtocol } from '../classes/interfaces/persistency-protocol';

export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }
}

PRECISAMOS TESTAR SE:
1 - método saveOrder retorna void/undefinied
2 - console.log é chamado 1 vez
3 - console.log imprime 'Pedido salvo com sucesso...'

*/

import { Persistency } from './persistency'; //importa a classe que vai ser testada

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    const sut = new Persistency(); //sut = system under test
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once and with "Pedido salvo com sucesso..."', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder(); //tem q rodar esse método para que o console.log seja ativado
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  });
});
