const nome = ["Gabriela"];
const sobrenome = ["Nery", "Dantas", "de", "Medeiros"];

let nomeCompleto = nome + sobrenome; //GabrielaNery,Dantas,de,Medeiros
console.log(nomeCompleto);

nomeCompleto = nome.concat(sobrenome); //[ 'Gabriela', 'Nery', 'Dantas', 'de', 'Medeiros' ]
console.log(nomeCompleto);

nomeCompleto = [...nome, ...sobrenome]; //[ 'Gabriela', 'Nery', 'Dantas', 'de', 'Medeiros' ]
console.log(nomeCompleto);
