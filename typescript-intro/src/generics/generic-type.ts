/**
 * Filter Original
 */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayFiltrado = array.filter((value) => value < 5);
console.log(arrayFiltrado);

/**
 * Filter implementado sem generics
 */

type Filterfn = (value: unknown, index?: number, array?: unknown[]) => boolean;

export function myFilter(array: unknown[], callbackfn: Filterfn): unknown[] {
  const newArray: unknown[] = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const arrayFiltrado1 = myFilter(array, (value) => {
  if (typeof value === 'number') return value < 5;
  return false;
});
console.log(arrayFiltrado1);

/**
 * Filter implementado com generics
 */

type Filterfn1<U> = (value: U, index?: number, array?: U[]) => boolean;

export function myFilter1<T>(array: T[], callbackfn: Filterfn1<T>): T[] {
  const newArray: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const arrayFiltrado2 = myFilter1(array, (value) => value < 5);
console.log(arrayFiltrado2);
