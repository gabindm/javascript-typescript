const months = ['Jan', 'March', 'April', 'June'];

const another = [...months];

another.splice(1, 0, 'Feb');
// inserts at index 1

console.log(months);
// expected output: Array ["Jan", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4

console.log(another);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]