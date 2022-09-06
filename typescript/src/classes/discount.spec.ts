/*
export abstract class Discount {
  protected discount = 0;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}

export class NoDiscount extends Discount {}

Precisamos testar:
1 - se price é number
2 - se em noDiscount o preço final está correto
3 - sem em Fifty... o preço está correto
4 - sem em Ten... o preço está correto
*/
import { Discount, FiftyPercentDiscount, TenPercentDiscount, NoDiscount } from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have no discount', () => {
    const sut = createSut(NoDiscount);
    //expect(sut.calculate(10.99)).not.toBeNull();
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('should have 50% discount', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(100)).toBeCloseTo(50);
  });

  it('should have 10% discount', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(100)).toBeCloseTo(90);
  });
});
