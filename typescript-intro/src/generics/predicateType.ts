export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}
console.log(isNumber(123), isNumber('a'));

export function soma<T>(...args: T[]): number {
  const total = args.reduce((soma, valor) => {
    if (isNumber(valor) && isNumber(soma)) {
      return soma + valor;
    }
    return soma;
  }, 0);

  return total;
}

console.log(soma(1, 2, 3, 4, 5));
console.log(soma(...[1, 2, 3, '4', '5']));
console.log(soma('1', '2', '3', '4', '5'));
