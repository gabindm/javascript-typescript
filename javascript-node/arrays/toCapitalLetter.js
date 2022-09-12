const x = [
  "Acknowledge pix infraction",
  "cancel payment by operation id",
  "cancel pix infraction received",
  "cancel pix infraction",
  "change by qr code dynamic payment",
  "close pix infraction received",
  "change by qr code dynamic payment",
  "close pix infraction received",
  "close pix infraction",
  "create by account payment",
  "create by qr code dynamic payment",
  "create by qr code static payment",
  "create decoded pix account",
  "create decoded qr code",
  "create pix devolution",
  "create pix infraction",
  "create qr code static",
  "delete by id qr code static",
  "due date by qr code dynamic payment",
  "get all payment",
  "get all pix statement",
  "get all qr code static",
  "get by id qr code static",
  "get infraction by psp id",
  "get payment by operation id",
  "get pix deposit by operation id",
  "get pix devolution by id",
  "get pix devolution by operation id",
  "get pix devolution received by operation id",
  "in analysis pix infraction",
  "open pix infraction",
  "receive payment charge back",
  "receive pix deposit",
  "receive pix devolution charge back",
  "receive pix devolution received",
  "receive pix infraction",
  "receive pix refund",
  "sync pix infractions due date",
  "sync scheduled payment",
  "sync waiting payment",
  "sync waiting pix devolution",
  "withdrawal by qr code dynamic payment",
  "withdrawal by qr code static payment",
];

const y = [];

for (i of x) {
  i = i.charAt(0).toUpperCase() + i.slice(1);
  y.push(i);
}

console.log(y);
