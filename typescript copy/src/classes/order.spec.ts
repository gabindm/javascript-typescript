//precisamos importar classe, construtores e dependencias:
import { Order } from './order';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';
import { CustomerOrder } from './interfaces/customer-protocol';
import { CartItem } from './interfaces/cart-item';

const createSut = () => {
  const shoppingCartProtocolMock = createShoppingCartProtocolMock();
  const messagingProtocolMock = createMessagingProtocolMock();
  const persistencyProtocolMock = createPersistencyProtocolMock();
  const customerOrderMock = createCustomerOrderMock();
  const sut = new Order(shoppingCartProtocolMock, messagingProtocolMock, persistencyProtocolMock, customerOrderMock);
  return { sut, shoppingCartProtocolMock, messagingProtocolMock, persistencyProtocolMock, customerOrderMock };
};

//cada construtor vai precisar de um mock:
const createShoppingCartProtocolMock = () => {
  class ShoppingCartProtocolMock implements ShoppingCartProtocol {
    //aperta em ShoppingCartProtocol pressionando ctrl pra trazer os atributos
    get items(): Readonly<CartItem[]> {
      return [];
    }
    addItem(item: CartItem): void {
      //
    }
    removeItem(index: number): void {
      //
    }
    total(): number {
      return 1;
    }
    totalWithDicount(): number {
      return 2;
    }
    isEmpty(): boolean {
      return false;
    }
    clear(): void {
      //
    }
  }
  return new ShoppingCartProtocolMock();
};

const createMessagingProtocolMock = () => {
  class MessagingProtocolMock implements MessagingProtocol {
    sendMessage(msg: string): void {
      //
    }
  }
  return new MessagingProtocolMock();
};

const createPersistencyProtocolMock = () => {
  class PersistencyProtocolMock implements PersistencyProtocol {
    saveOrder(): void {
      //
    }
  }
  return new PersistencyProtocolMock();
};

const createCustomerOrderMock = () => {
  class CustomerOrderMock implements CustomerOrder {
    getName(): string {
      return '';
    }
    getIDN(): string {
      return '';
    }
  }
  return new CustomerOrderMock();
};

describe('Order', () => {
  afterEach(() => jest.clearAllMocks());

  it('should not checkout if cart is empty', () => {
    const { sut, shoppingCartProtocolMock } = createSut();
    const shoppingCartProtocolMockSpy = jest.spyOn(shoppingCartProtocolMock, 'isEmpty').mockReturnValueOnce(true);
    sut.checkout(); //se retorno for true, está empty
    expect(shoppingCartProtocolMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('open'); //true = open
  });

  it('should checkout if cart is not empty ', () => {
    const { sut, shoppingCartProtocolMock } = createSut();
    const shoppingCartProtocolMockSpy = jest.spyOn(shoppingCartProtocolMock, 'isEmpty').mockReturnValueOnce(false);
    sut.checkout(); //se retorno for false, não está empty
    expect(shoppingCartProtocolMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('closed'); //false = closed
  });

  it('should send confirmation to customer once', () => {
    const { sut, messagingProtocolMock } = createSut();
    const messagingProtocolMockSpy = jest.spyOn(messagingProtocolMock, 'sendMessage'); //classe e método
    sut.checkout();
    expect(messagingProtocolMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should save order', () => {
    const { sut, persistencyProtocolMock } = createSut();
    const persistencyProtocolMockSpy = jest.spyOn(persistencyProtocolMock, 'saveOrder'); //classe e método
    sut.checkout();
    expect(persistencyProtocolMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should clear cart after saving', () => {
    const { sut, shoppingCartProtocolMock } = createSut();
    const shoppingCartProtocolMockSpy = jest.spyOn(shoppingCartProtocolMock, 'clear'); //classe e método
    sut.checkout();
    expect(shoppingCartProtocolMockSpy).toHaveBeenCalledTimes(1);
  });
});
