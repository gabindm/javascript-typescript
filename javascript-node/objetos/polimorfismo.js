function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo >= valor) this.saldo -= valor;
  else console.log("Saldo insuficiente:", this.saldo);
};
Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
};
Conta.prototype.verSaldo = function () {
  console.log("Seu saldo é:", this.saldo.toFixed(2));
};

/*--------------------------------------------------------- */

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
//dessa forma, o constructor de ContaCorrente passa a ser Conta
ContaCorrente.prototype.constructor = ContaCorrente;
//agora, o constructor de ContaCorrente passa a ser ContaCorrente

ContaCorrente.prototype.ajustarLimite = function (valor) {
  this.limite = valor;
};
ContaCorrente.prototype.sacar = function (valor) {
  if (this.saldo + this.limite >= valor) this.saldo -= valor;
  else console.log("Saldo insuficiente:", this.saldo);
};

/*--------------------------------------------------------- */

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
//dessa forma, o constructor de ContaPoupanca passa a ser Conta
ContaPoupanca.prototype.constructor = ContaPoupanca;
//agora, o constructor de ContaPoupanca passa a ser ContaPoupanca

/*--------------------------------------------------------- */

console.log("\nConta 1:");
const conta1 = new Conta(0001, 12345, 100);
conta1.depositar(200);
conta1.sacar(50);
conta1.verSaldo(); //250
conta1.sacar(500);
conta1.verSaldo();

console.log("\nConta Corrente 1:");
const contaCorrente1 = new ContaCorrente(0001, 12345, 100, 100);
contaCorrente1.ajustarLimite(200);
contaCorrente1.sacar(300);
contaCorrente1.verSaldo(); //-200

console.log("\nConta Poupanca 1:");
const contaPoupanca1 = new ContaPoupanca(0001, 12345, 100, 100);
contaPoupanca1.depositar(200);
contaPoupanca1.sacar(50);
contaPoupanca1.verSaldo(); //250
contaPoupanca1.sacar(350);
contaPoupanca1.verSaldo();
