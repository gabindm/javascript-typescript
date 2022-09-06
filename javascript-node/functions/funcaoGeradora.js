function* geradora1() {
  //...
  yield "Valor 1";
  //...
  yield "Valor 2";
  //...
  yield "Valor 3";
}
const g1 = geradora1();
console.log(g1);
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());

/* ----------------------------- */
console.log("\n");
/* ----------------------------- */

function* geradora2() {
  //...
  yield "Valor 4";
  //...
  yield "Valor 5";
  //...
  yield "Valor 6";
}
const g2 = geradora2();
console.log(g2);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

/* ----------------------------- */
console.log("\n");
/* ----------------------------- */

function* geradora3() {
  //...
  yield "Valor 7";
  //...
  yield "Valor 8";
  //...
  yield "Valor 9";
}
const g3 = geradora3();
console.log(g3);
for (let valor of g3) {
  console.log(valor);
}

/* ----------------------------- */
console.log("\n");
/* ----------------------------- */

function* geradora4() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}
const g4 = geradora4();
console.log(g4);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);

/* ----------------------------- */
console.log("\n");
/* ----------------------------- */

function* geradora5() {
  yield 0;
  yield 1;
  yield 2;
}
function* geradora6() {
  yield* geradora5();
  yield 3;
  yield 4;
  yield 5;
}
const g6 = geradora6();
for (let i of g6) {
  console.log(i);
}

/* ----------------------------- */
console.log("\n");
/* ----------------------------- */

function* geradora7() {
  yield () => console.log("vim do yield 1");
  yield () => console.log("vim do yield 2");
  yield () => console.log("vim do yield 3");
}
const g7 = geradora7();
const func1 = g7.next().value;
const func2 = g7.next().value;
const func3 = g7.next().value;
func1();
func2();
func3();
