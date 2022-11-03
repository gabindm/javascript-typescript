export function funcao(this: Date, name: string, age: number): void {
  console.log(this);
  console.log(name);
  console.log(age);
}

// funcao(new Date(), 'gabriela', 28); //espera só 2 argumento, pois this: Date é só a tipagem do this
funcao.call(new Date(), 'Gabriela Nery', 28);
funcao.apply(new Date(), ['Bacon Valerio', 2]);
