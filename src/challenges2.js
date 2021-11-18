// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
// refs:
// Regular Expression: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// encontrar match de texto: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript
function hydrate(bebidas) {
  // variável dígitos contém um objeto "Regular Expression", utilizado para encontrar padrões em texto.
  // '\d+' = "Um ou mais dígitos" e 'g' = retorna todos os matches
  let digitos = /\d+/g;

  // 'var.match()' = retorna, em um array de strings, os dígitos da string que a função encontrar.
  // '.map(Number)' = retorna número ao invés de string no array.
  let numBebidasArray = bebidas.match(digitos).map(Number);

  let qtdBebidas = 0;
  for(let i = 0; i < numBebidasArray.length; i += 1){
    qtdBebidas = qtdBebidas + numBebidasArray[i];
  }

  if(qtdBebidas > 1){
    return(qtdBebidas + ' copos de água')
  }else{
    return(qtdBebidas + ' copo de água')
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
