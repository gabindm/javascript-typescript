//Array<T>
function multiplicaArgs(...args: Array<number>): number {
  let initialValue = 1;
  return args.reduce((previousValue, currentValue) => previousValue * currentValue, initialValue);
}
console.log(multiplicaArgs(1, 2, 3, 4, 5));

//T[]
function multiplicaArgs1(...args: number[]): number {
  let initialValue = 1;
  return args.reduce((previousValue, currentValue) => previousValue * currentValue, initialValue);
}
console.log(multiplicaArgs1(1, 2, 3, 4, 5));

//Array<T>
function concatenaArgs(...args: Array<string>): string {
  let initialValue = '';
  return args.reduce((previousValue, currentValue) => previousValue + ' ' + currentValue, initialValue);
}
console.log(concatenaArgs('Gabi', 'Nery'));

//T[]
function concatenaArgs1(...args: Array<string>): string {
  let initialValue = '';
  return args.reduce((previousValue, currentValue) => previousValue + ' ' + currentValue, initialValue);
}
console.log(concatenaArgs1('Gabi', 'Nery'));

//T[]
function maiuscula(...args: string[]): string[] {
  return args.map((x) => x.toUpperCase());
}
console.log(maiuscula('Gabi', 'Nery'));
