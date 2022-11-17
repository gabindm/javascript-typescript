/**
 * Sem typeof e keyof
 */

// type CoresObj = {
//   vermelho: string;
//   verde: string;
//   azul: string;
// };

// const coresIngles: CoresObj = {
//   vermelho: 'red',
//   verde: 'green',
//   azul: 'blue',
// };

// function traduzirCor(cor: 'vermelho' | 'verde' | 'azul', cores: CoresObj): string {
//   return cores[cor];
// }

// console.log(traduzirCor('vermelho', coresIngles));

/**
 * Com typeof
 */
// const coresIngles = {
//   vermelho: 'red',
//   verde: 'green',
//   azul: 'blue',
// };

// function traduzirCor(cor: 'vermelho' | 'verde' | 'azul', cores: typeof coresIngles): string {
//   return cores[cor];
// }

// console.log(traduzirCor('vermelho', coresIngles));

/**
 * Com typeof e keyof
 */
const coresIngles = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

function traduzirCor(cor: keyof typeof coresIngles, cores: typeof coresIngles): string {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresIngles));
