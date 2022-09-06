function ValidaCPF(cpfEnviado) {
  //primeiro vamos tirar . e -
  Object.defineProperty(this, "cpfLimpo", {
    enumerable: true, //para que seja exibido
    get: function () {
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}

ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === "undefined") return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.ehSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  //console.log(digito1);
  const digito2 = this.criaDigito(cpfParcial + digito1);
  //console.log(digito2);
  const cpfCorreto = cpfParcial + digito1 + digito2;
  return cpfCorreto === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = cpfParcial.split("");
  let regressivo = cpfArray.length + 1;
  const somatorio = cpfArray.reduce((acumulador, valor) => {
    acumulador += valor * regressivo;
    regressivo--;
    return acumulador;
  }, 0);
  if (somatorio % 11 <= 1) return 0;
  else return 11 - (somatorio % 11);
};

ValidaCPF.prototype.ehSequencia = function (cpf) {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return this.cpfLimpo === sequencia;
};

let cpf = new ValidaCPF("11111111111");
if (cpf.valida()) console.log("CPF válido");
else console.log("CPF inválido");
