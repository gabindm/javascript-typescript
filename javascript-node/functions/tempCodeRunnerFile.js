f1(f1Callback);
function f1Callback() {
  f2(f2Callback);
}
function f2Callback() {
  f3(f3Callback);
}
function f3Callback() {
  console.log("Terminamos a execução na ordem correta :)");
}