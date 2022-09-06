/*
try {
  try {
    throw new Error("oops");
  }
  catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  }
  finally {
    console.log("finally");
  }
}
catch (ex) {
  console.error("outer", ex.message);
}

// Resultado:
// "inner" "oops"
// "finally"
// "outer" "oops"
*/

try {
	console.log('Essa mensagem aparece primeiro!')
   	throw "myException"; // gera uma exceção
   	console.log('Essa mensagem não aparece :(')
}
catch (e) { // declarações para manipular quaisquer exceções
	console.log('Essa mensagem aparece em segundo!')
   	console.error(e); // passa o objeto de exceção para o manipulador de erro
}