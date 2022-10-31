/*
 * Recomendado: Condicional ou Type Assertion
 */

//Type assertion
const body1 = document.querySelector('body') as HTMLBodyElement;
body1.style.background = 'red';

//Condicional
const body3 = document.querySelector('body');
if (body3) body3.style.background = 'red';

//HTML Element
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'blablabla';
input.focus();

/*
 * Não recomendado
 */

//No assertion: daria erro pois body pode ser null
//const body = document.querySelector('body');
//body.style.background = 'red';

//Non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

//Type Assertion para mudar o tipo
//const body4 = document.querySelector('body') as number;
const body5 = document.querySelector('body') as unknown as number;
