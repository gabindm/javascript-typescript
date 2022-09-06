import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistence } from './services/persistence';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { NoDiscount, TenPercentDiscount, FiftyPercentDiscount } from './classes/discount';

// const noDiscount = new NoDiscount();
// const shoppingCart = new ShoppingCart(noDiscount);
// const tenPercentDiscount = new TenPercentDiscount();
// const shoppingCart = new ShoppingCart(tenPercentDiscount);
const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);

const messaging = new Messaging();
const persistency = new Persistence();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camisa', 100.0));
shoppingCart.addItem(new Product('Shorts', 80.432));
shoppingCart.addItem(new Product('Bikini', 130.0));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDescount());
console.log(order.orderStatus, '\n');

order.checkout();
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus, '\n');
