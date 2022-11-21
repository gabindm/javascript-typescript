//encadeamento opcional

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'Certidao de Nascimento',
  texto: 'blablabla',
};

console.log(documento.data?.toDateString());

documento.data = new Date();

console.log(documento.data?.toDateString());

// coalescencia nula

const documento1: Documento = {
  titulo: 'Certidao de Nascimento',
  texto: 'blablabla',
};

console.log(documento1.data?.toDateString() ?? 'Não existe data');
console.log(undefined ?? 'Outra coalescência nula');
console.log(null ?? 'Outra coalescência nula');

documento1.data = new Date();

console.log(documento1.data?.toDateString());
