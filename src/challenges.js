// Desafio 1
function compareTrue(boolOne, boolTwo) {
  if(boolOne && boolTwo){
    return(true);
  }else{
    return(false);
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2;
  return(area);
}

// Desafio 3
// Fonte de pesquisa: https://www.w3schools.com/jsref/jsref_split.asp
function splitSentence(text) {
  // A função .split separa uma string em sub-strings e retorna um array com a string original separada.
  let resultado = text.split(" ");
  return(resultado);
}

// Desafio 4
function concatName(array) {
  return(array.pop() + ', ' + array.shift());
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = (wins*3)+(ties);
  return(resultado);
}

// Desafio 6
function highestCount(array) {

  let contagem = 0;

  // Definindo a variável "temp" como a primeira posição do array para que caso um array de números negativos 
  //seja entrado, o valor padrão (0) da variável vazia não interfira na comparação.
  let temp = array[0];

  for(i = 0; i < array.length; i += 1){
    if(temp < array[i]){
      temp = array[i];
    }
  }

  for(i = 0; i < array.length; i += 1){
    if(array[i] === temp){
      contagem += 1;
    } 
  } 

  return(contagem);
}

// Desafio 7 
// Para conseguir a diferença absoluta entre as distâncias, ref:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse, cat1, cat2) {

  let cat1Dist = Math.abs(cat1 - mouse);
  let cat2Dist = Math.abs(cat2 - mouse);

  if(cat1Dist < cat2Dist){
    return('cat1');
  }else if(cat2Dist < cat1Dist){
    return('cat2');
  }else{
    return('os gatos trombam e o rato foge')
  }
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for(i=0; i<array.length; i+=1){

    if(array[i]%3==0 || array[i]%5==0){

      if(array[i]%3==0 && array[i]%5!==0){
        resultado.push('fizz');

      }else if(array[i]%5==0 && array[i]%3!==0){
        resultado.push('buzz'); 

      }else if(array[i]%3==0 && array[i]%5==0){
        resultado.push('fizzBuzz');
        
      }

    }else{
      resultado.push('bug!');
    }
  }
    return(resultado);
}


// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
}
