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

function encode(originalMessage) {

  //percorrer string, separar cada caractere num array
  let arrayOriginMes = [];
  for(let i = 0; i<originalMessage.length; i+=1){
    arrayOriginMes = originalMessage.split("");
  }

  // comparar cada caractere, substituir vogais por numeros
  for(let i = 0; i<arrayOriginMes.length; i += 1){
    if(arrayOriginMes[i] == 'a'){
      arrayOriginMes[i] = '1';
    }else if(arrayOriginMes[i] == 'e'){
      arrayOriginMes[i] = '2';
    }else if(arrayOriginMes[i] == 'i'){
      arrayOriginMes[i] = '3';
    }else if(arrayOriginMes[i] == 'o'){
      arrayOriginMes[i] = '4';
    }else if(arrayOriginMes[i] == 'u'){
      arrayOriginMes[i] = '5';
    }
  }
  
  // Reconstruir(concatenando) a string a partir do Array já codificado
  let codedMessage = '';
  for(let i = 0; i<arrayOriginMes.length; i += 1){
    codedMessage = codedMessage + arrayOriginMes[i];
  }
  return(codedMessage);

}

let encodedMessage = encode('hi there!');

console.log(decode(encodedMessage));

function decode(message) {
  //percorrer string, separar cada caractere num array
  let arrayMes = [];

  for(let i = 0; i<message.length; i+=1){
    arrayMes = message.split("");
  }

  // comparar cada caractere, substituir vogais por numeros
  for(let i = 0; i<arrayMes.length; i += 1){
    if(arrayMes[i] == '1'){
      arrayMes[i] = 'a';
    }else if(arrayMes[i] == '2'){
      arrayMes[i] = 'e';
    }else if(arrayMes[i] == '3'){
      arrayMes[i] = 'i';
    }else if(arrayMes[i] == '4'){
      arrayMes[i] = 'o';
    }else if(arrayMes[i] == '5'){
      arrayMes[i] = 'u';
    }
  }
  
  // Reconstruir(concatenando) a string a partir do Array já codificado
  let decodedMessage = '';
  for(let i = 0; i<arrayMes.length; i += 1){
    decodedMessage = decodedMessage + arrayMes[i];
  }
  return(decodedMessage);
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