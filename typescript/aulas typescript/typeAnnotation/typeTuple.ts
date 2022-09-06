const dadosCLiente1: [number, string] = [1, 'Luiz'];
dadosCLiente1[0] = 100;
console.log(dadosCLiente1);

const dadosCLiente2: [number, string, string?] = [2, 'Gabriela'];
dadosCLiente2[2] = 'Nery';
console.log(dadosCLiente2);

const dadosCLiente3: [number, string, ...string[]] = [3, 'Gabriela'];
dadosCLiente3[2] = 'Nery';
dadosCLiente3[3] = 'Dantas';
dadosCLiente3[4] = 'de';
dadosCLiente3[5] = 'Medeiros';
console.log(dadosCLiente3);

const dadosCLiente4: readonly [number, string] = [4, 'Gabriela'];
//dadosCLiente4[1] = 'Nery'; DARIA ERRO POIS EH READONLY
console.log(dadosCLiente4);

const dadosCLiente5: ReadonlyArray<string> = ['Gabriela', 'Nery'];
//dadosCLiente5[1] = 'Medeiros'; DARIA ERRO POIS EH READONLY
console.log(dadosCLiente5);
