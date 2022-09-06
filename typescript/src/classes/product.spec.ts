/*
import { CartItem } from './interfaces/cart-item';

export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}

PRECISAMOS TESTAR:
1 - se Product retorna as propriedades name e price
*/

import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have properties name and price', () => {
    const sut = createSut('Camiseta', 49.9);
    expect(sut).toHaveProperty('name', 'Camiseta');
    //expect(sut).toHaveProperty('price', 49.9); //não é recomendado por conta de ponto flutuante
    expect(sut.price).toBeCloseTo(49.9);
  });
});
