import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistence } from '../services/persistence';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistence,
  ) {}

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Não há itens no carrinho de compra.');
      return;
    }
    this.messaging.sendMessage(`Seu pedido de total ${this.cart.total()} foi recebido com sucesso.`);
    this.persistency.saveOrder();
    this.cart.clear();

    this._orderStatus = 'closed';
  }
}
