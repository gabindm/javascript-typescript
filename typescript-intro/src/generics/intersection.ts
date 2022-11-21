export function unirObjetos<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const obj1 = { a: 'A' };
const obj2 = { b: 'B' };
const uniao = unirObjetos(obj1, obj2);
console.log(uniao);

/**
 * Outra forma de escrever
 */
export function unirObjetos1<T, U>(obj1: T, obj2: U): T & U {
  return Object.assign({}, obj1, obj2);
}

const uniao1 = unirObjetos1(obj1, obj2);
console.log(uniao1);
