// Desafio 1
function compareTrue(boolOne, boolTwo) {
  if(boolOne && boolTwo){
    return(true);
  }else{
    return(false);
  }
}
// console.log('Desafio 1, compareTrue:', compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2;
  return(area);
}
// console.log('Desafio 2, calcArea:', calcArea(10, 50));

// Desafio 3
// Fonte de pesquisa: https://www.w3schools.com/jsref/jsref_split.asp
function splitSentence(text) {
  let resultado = text.split(" ");
  return(resultado);
}
// console.log('Desafio 3, splitSentence: ', splitSentence('go Trybe'));

// Desafio 4
function concatName(array) {
  return(array.pop() + ', ' + array.shift());
}

let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// console.log('Desafio 4, concatName:', concatName(array));;

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = (wins*3)+(ties);
  return(resultado);
}
// console.log('Desafio 5, footballPoints:', footballPoints(14, 8));

// Desafio 6
function highestCount(array) {

  let contagem = 0;
  let temp1 = array[0];

  for(i = 0; i < array.length; i += 1){
    if(temp1 < array[i]){
      temp1 = array[i];
    }
  }

  for(i = 0; i < array.length; i += 1){
    if(array[i] === temp1){
      contagem += 1;
    } 
  } 
  return(contagem);

}

console.log( 'Desafio 6, highestCount:', highestCount([6,-2,-1]));


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
// console.log('Desafio 7, catAndMouse:', catAndMouse(0, 3, 12));

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

// console.log('Desafio 8, fizzBuzz: ', fizzBuzz([2, 15, 7, 9, 45]));

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
