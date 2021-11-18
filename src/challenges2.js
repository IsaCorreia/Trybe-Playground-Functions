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
function hydrate(bebidas) {

  // refs:
  // Regular Expression: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
  // encontrar match de texto: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript
  
  // variável dígitos contém um objeto "Regular Expression", utilizado para encontrar padrões em texto.
  // '\d+' = "Um ou mais dígitos"
  // '/g' = retorna todos os matches
  let digitos = /\d+/g;

  // 'var.match()' = retorna, em um array, os dígitos da string que a função encontrar.
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
let string = "3 cerveja";
// console.log('Bem-vindo(a) ao bar da Trybe! Se você vai beber:', string + ', para não ficar com ressaca, você deve beber', hydrate( string ), "copos de água!");
console.log(hydrate(string));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
