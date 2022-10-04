const msg = "Socorram-me subi no onibus em Marrocos";

const separador1 = " "
const separador2 = "  "

console.log(msg.split(separador1).reverse().join(separador2));

//split.(separador1) = ['Socorram-me', 'subi', 'no', 'onibus', 'em', 'marrocos']
//reverse() = ['marrocos', 'em', 'onibus', 'no', 'subi', 'Socorram-me']
//join() = "marrocos  em  onibus  no  subi  socorram-me"
