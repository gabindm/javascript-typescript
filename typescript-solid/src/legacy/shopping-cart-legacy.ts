type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  remodeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  total(): number {
    return +this._items.reduce((total, next) => (total += next.price), 0).toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Não há itens no carrinho de compra.');
      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido de total ${this.total()} foi recebido com sucesso.`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(message: string): void {
    console.log(message);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso.');
  }

  clear(): void {
    this._items.length = 0;
    console.log('O carrinho de compras foi esvaziado.');
  }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: 'Camisa', price: 100.0 });
shoppingCart.addItem({ name: 'Shorts', price: 80.432 });
shoppingCart.addItem({ name: 'Bikini', price: 130.0 });
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus, '\n');

shoppingCart.checkout();
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus, '\n');
