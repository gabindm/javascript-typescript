function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'string' && typeof b === 'string') return a + b;
  else return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('Eu voto ', 22));
