export abstract class Discount {
  protected discount = 0;

  calculate(value: number): number {
    return value * (1 - this.discount);
  }
}

export class NoDiscount extends Discount {}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}
