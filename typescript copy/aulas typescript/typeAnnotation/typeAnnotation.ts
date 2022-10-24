/* eslint-disable */
let nome_: string = 'Gabriela';
let idade: number = 28;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
let big: bigint = 10n;

//arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros1: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['abc', 'def'];
let arrayDeStrings1: string[] = ['abc', 'def'];

//objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  // ? = opcional
  nome: 'Gabriala Nery',
  idade: 28,
};

//funcoes
function soma(x: number, y: number): number {
  return x + y;
}
const soma1: (x: number, y: number) => number = (x, y) => x + y;
