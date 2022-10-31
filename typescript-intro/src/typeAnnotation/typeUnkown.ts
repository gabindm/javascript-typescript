const x: unknown = '100';
const y = 100;

// console.log(x + y); //daria erro pois x é unknown

if (typeof x === 'number') console.log(x + y);
