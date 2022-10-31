/*

PRECISAMOS TESTAR:
1 - classe ShoppingCart com mock Discount
1.1 - método isEmpty()
1.2 - método addItem()
1.3 - método total()
1.4 - método totalWithDicount()
1.5 - método clear()
1.6 - método removeItem()
*/
import { Discount } from './discount';
import { ShoppingCart } from './shopping-cart';
import { CartItem } from './interfaces/cart-item';

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock); //precisa do argumento discount, que é uma classe, então vamos criar um mock para ele
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }
  return new CartItemMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();
  const cartItem1 = createCartItem('Camiseta', 80);
  const cartItem2 = createCartItem('Shorts', 100);
  sut.addItem(cartItem1);
  sut.addItem(cartItem2);
  return { sut, discountMock };
};

describe('Shopping Cart', () => {
  afterEach(() => jest.clearAllMocks());

  it('should be an empty cart when no product is added', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 cart items, total = 180, totalWithDiscount() = 180', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    expect(sut.total()).toBe(180);
    expect(sut.totalWithDicount()).toBe(180);
  });

  it('should clear cart', () => {
    const { sut } = createSutWithProducts();
    sut.clear();
    expect(sut.items.length).toBe(0);
  });

  it('should remove products', () => {
    const { sut } = createSutWithProducts();
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
    sut.removeItem(0);
    expect(sut.items.length).toBe(0);
  });

  it('should call discount.calculate once when totalWithDicount is called', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDicount();
    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should call discount.calculate with total price once when totalWithDicount is called', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDicount();
    expect(discountMockSpy).toHaveBeenCalledWith(sut.total());
  });
});
