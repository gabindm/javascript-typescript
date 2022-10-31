type MapStrings = (item: string) => string;

function mapStrings(array: string[], func: MapStrings): string[] {
  // let newArray: string[] = [];
  //newArray = array.map(func);

  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const newI = func(array[i]);
    newArray.push(newI);
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];

const abcMapped = mapStrings(abc, (item) => item.toUpperCase());

console.log(abc);
console.log(abcMapped);
