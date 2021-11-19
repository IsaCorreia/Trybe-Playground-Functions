// Desafio 10
function techList(array, name) {

  if (array.length === 0){
    return ('Vazio!');    
  }  
  let lista = [];
  let ordenado = array.sort();

  for (let i = 0; i < ordenado.length; i += 1) {
    lista.push(
      {
        tech: ordenado[i], 
        name: name, 
      }, 
    );
  }
  return lista;
}

console.log( techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas") );

// Desafio 11
function generatePhoneNumber(numero) {
  if(numero.length != 11) {
    return 'Array com ramanho incorreto.'
    // OK
  }

  for ( let i = 0; i < numero.length; i += 1) {
    if (numero[i] < 0 || numero[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
      // OK
    }
    let cont = 0;
    for (let j = 1; j<numero.length; j += 1){

      if (numero[i] === numero[j]){
        cont =+ 1;
      }

      if ( cont >= 3){
        return 'não é possível gerar um número de telefone com esses valores';
        // OK
      }
    }
  }
}

console.log( generatePhoneNumber([1, 2, 3, 4, 1, 1, 7, 8, 9, 0, 1])  );

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB > lineC && lineC > Math.abs(lineA - lineB)){
    return true;
  }
  return false;

}

console.log( triangleCheck(10, 14, 8) );

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
  for (let i = 0; i < numBebidasArray.length; i += 1) {
    qtdBebidas += numBebidasArray[i];
  }

  if (qtdBebidas === 1) {
    return (qtdBebidas + ' copo de água');
  }
  return (qtdBebidas + ' copos de água');
}

// function hydrate2(bebidas) {
//   let numBebidas = parseInt(bebidas, 10);

//   for (let i = 0; i < bebidas.length; i += 1) {
//     console.log( parseInt(bebidas[i]) );
//   }
// }

// console.log( hydrate2('1 vihno') );

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
