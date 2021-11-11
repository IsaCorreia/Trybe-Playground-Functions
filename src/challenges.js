// Desafio 1
function compareTrue(boolOne, boolTwo) {
  if(boolOne && boolTwo){
    return(true);
  }else{
    return(false);
  }
}
console.log('Desafio 1, compareTrue:', compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2;
  return(area);
}
console.log('Desafio 2, calcArea:', calcArea(10, 50));

// Desafio 3
// Fonte de pesquisa: https://www.w3schools.com/jsref/jsref_split.asp
function splitSentence(text) {
  let resultado = text.split(" ");
  return(resultado);
}
console.log('Desafio 3, splitSentence: ', splitSentence('go Trybe'));

// Desafio 4
function concatName(array) {
  let arrayLastFirst = [];
  // // ultimo elemento
  // arrayLastFirst.push(array.pop());
  // // primeiro elemento
  // arrayLastFirst.push(array.shift());
  return(array.pop() + ', ' + array.shift());
}

let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log('Desafio 4, concatName:', concatName(array));;

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = (wins*3)+(ties);
  return(resultado);
}
console.log('Desafio 5, footballPoints:', footballPoints(14, 8));

// Desafio 6
function highestCount() {
  // seu código aqui
  // Vai ser um Bubble Sort
  // Verificar referência: https://pt.stackoverflow.com/questions/478167/ordenando-arrays-com-bubble-sort
}

// Desafio 7
function catAndMouse(cat1, cat2) {
  if(cat1<cat2){
    return('cat1');
  }else if(cat2<cat1){
    return('cat2');
  }else{
    return('os gatos trombam e o rato foge')
  }
}

console.log('Desafio 7, catAndMouse:', catAndMouse(6, 12));

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
};
