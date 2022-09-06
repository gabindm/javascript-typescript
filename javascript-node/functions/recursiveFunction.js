function contador(inicio) {
  if (inicio > 10) return;
  console.log(inicio);
  inicio++;
  contador(inicio);
}
contador(0);
