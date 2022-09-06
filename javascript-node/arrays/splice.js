const nomes = ["trufa", "bacon", "kobe", "gabi"];

//pop
nomes.splice(3, 1); //[ 'trufa', 'bacon', 'kobe' ]
console.log(nomes);

//push
nomes.splice(nomes.length, 0, "gabi"); //[ 'trufa', 'bacon', 'kobe', 'gabi' ]
console.log(nomes);

//shift
nomes.splice(0, 1); //[ 'bacon', 'kobe', 'gabi' ]
console.log(nomes);

//pop
nomes.splice(nomes.length - 1, 1); //[ 'bacon', 'kobe' ]
console.log(nomes);

//unshift
nomes.splice(0, 0, "trufa"); //[ 'trufa', 'bacon', 'kobe' ]
console.log(nomes);

//push de mais de um elemento
nomes.splice(nomes.length, 0, "Antonio", "José Carlos"); //[ 'trufa', 'bacon', 'kobe', 'Antonio', 'José Carlos' ]
console.log(nomes);

//pop de mais de um elemento
nomes.splice(-2, nomes.length); //[ 'trufa', 'bacon', 'kobe' ]
console.log(nomes);

// nomes.splice(2, 0, "Antonio"); //[ 'trufa', 'bacon', 'Antonio', 'kobe' ]
// console.log(nomes);

// nomes.splice(2, 1, "josé carlos"); //[ 'trufa', 'bacon', 'josé carlos', 'kobe' ]
// console.log(nomes);

// nomes.splice(-2, 1); //[ 'trufa', 'bacon', 'kobe' ]
// console.log(nomes);
