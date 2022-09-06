import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistence } from './services/persistence';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistence();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camisa', 100.0));
shoppingCart.addItem(new Product('Shorts', 80.432));
shoppingCart.addItem(new Product('Bikini', 130.0));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus, '\n');

order.checkout();
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus, '\n');
