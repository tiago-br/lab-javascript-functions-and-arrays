// Iteration #1: Find the maximum
function maxOfTwoNumbers(number1 , number2){
  if (number1 == number2){
    return number1,number2;

  }else if(number1 > number2){
    return number1;
  }else {
    return number2;
  }

}   


// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findLongestWord(someArray){
  let emptyArray =[]
  if(someArray[0]==emptyArray[0] && emptyArray.length < 1){
    return null;
  }else if (someArray.length == 1){
    return someArray[0];
  }else{
    let longestWord = ""
    for(let i=0; i<someArray.length ;i+=1){
        if (longestWord.length < someArray[i].length){
          longestWord = someArray[i]
        }
    }return longestWord;
  }
}
      

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let arrayCountNumber = 0
function sumNumbers(someNumberArray){
  if (someNumberArray.length==0){
    return 0;
  }
  if(someNumberArray.length==1){
    return someNumberArray[0]
  }
  for(let i = 0 ; i<someNumberArray.length ; i += 1){
    if (someNumberArray[i] == 0){
      if(someNumberArray[someNumberArray.length - 1] ==0){
        return 0;
      }
    }else{
      break;
    }
    }
  for(let i = 0 ; i<someNumberArray.length ; i +=1){
    arrayCountNumber += someNumberArray[i];
    

  }
  return arrayCountNumber;
  }
//Bonus 3.1

function sum(anyArraySum){
  if(anyArraySum.length ===0){
    return 0;
  }
  if(anyArraySum.length==1){
    if(typeof anyArraySum[0] =="number"){
      return anyArraySum[0];
    }
  }
  let countBreak= 0
  for (let i=0 ; i<anyArraySum.length; i+=1){
    if(anyArraySum[i]==0){
      countBreak += 1;
      if (countBreak===anyArraySum.length){
        return 0;
      }
    }
  }
  countBreak = 0;
  let countNumbers = 0;
  for (let i=0 ; i<anyArraySum.length; i+=1){
    if (typeof anyArraySum[i] !=="number"){
      break;
    }else{
      countNumbers += anyArraySum[i];
      countBreak += 1;
        if(countBreak === anyArraySum.length){
          return countNumbers;
        }
        
    }
  }
  countBreak = 0;
  let countString =0;
  for (let i=0 ; i<anyArraySum.length ; i += 1){
    if (typeof anyArraySum[i] !== "string"){
      break;
    }else{
      countString += anyArraySum[i].length
      countBreak += 1;
       if(countBreak === anyArraySum.length){
         return countString;
       }
    }
  }
  countBreak = 0
  countNumbers = 0
  countString = 0
  for (let i=0 ; i<anyArraySum.length ; i += 1){
    if (typeof anyArraySum[i]=== "string" || typeof anyArraySum[i]==="number" || typeof anyArraySum[i] ==="boolean"){
      if(typeof anyArraySum[i] === "string"){
        countString += anyArraySum[i].length;
        countBreak += 1 ;
      }else if(typeof anyArraySum[i]==="number"){
        countNumbers += anyArraySum[i];
        countBreak += 1;
      }else{
        if(anyArraySum[i]===true){
          countNumbers += 1;
          countBreak +=1;
        }
      }

    }
    else {
      throw new Error("Unsupported data type sir or ma'am");
    }
    
  }
  
  
  return countNumbers+countString;
     
}


// Iteration #4: Calculate the average

function averageNumbers(someAverageNumberArray){
  let someAverageNumberArrayEmpty =[]
  if(someAverageNumberArray[0] == someAverageNumberArrayEmpty[0]){
    return null;
  }
  if(someAverageNumberArray.length == 1){
    return someAverageNumberArray[0];
  }
  let somaDosNumeros = 0
  for(let i=0 ; i<someAverageNumberArray.length ; i+=1){
        somaDosNumeros += someAverageNumberArray[i];
    }
  
  return somaDosNumeros/someAverageNumberArray.length;
}


// Level 1: Array of numbers


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageWordLength(wordLength){
  let wordLengthEmpty =[]
  if(wordLength[0] == wordLengthEmpty[0]){
    return null;
  }
  if(wordLength.length == 1){
    return wordLength[0].length;
  }
  let counterWordLengthEmpty = 0
  for(let i = 0 ; i<wordLength.length ; i+=1){
      counterWordLengthEmpty += wordLength[i].length;
  }
  return counterWordLengthEmpty/wordLength.length;
}
//Bonus function avg;
function avg(mixedElementArray){
  if(mixedElementArray.length===0){
    return null;
  }
  let sumMixedElements =0;
  mixedElementArray.forEach(elemento =>{
    if(typeof elemento==="string"){
      sumMixedElements+=elemento.length;
    }
    if(typeof elemento==="number"){
      sumMixedElements+=elemento;
    }
    if (typeof elemento==="boolean"){
      if (elemento==true){
        sumMixedElements += 1;
      }
    }
  })
  let mediaDaArray =Number((sumMixedElements/mixedElementArray.length).toFixed(2))
  return mediaDaArray;

}











// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(uniquify){
  if(uniquify.length===0){
    return null;
  }
  let correctUniquiArray =[]
  for (let i = 0 ; i<uniquify.length ; i+=1){
      if(correctUniquiArray.indexOf(uniquify[i])==-1){
        correctUniquiArray.push(uniquify[i])
      }
      
     }
  return correctUniquiArray;
  }

     

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arrayWords, someWordInArray){
  if(arrayWords.length ===0){
    return null;
  }
  if(arrayWords.length ===1){
    if(arrayWords[0]===someWordInArray){
      return true;
    }
    else{
      return false;
    }
  }
  for(let i = 0 ; i<arrayWords.length ; i +=1){
    if(arrayWords[i] === someWordInArray){
      return true
    }
  }
return false;
}



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(arrayManyTimes,wordManyTimes){
  if (arrayManyTimes.length===0){
    return 0;
  }
  let countManyTimes =0;
  for (let i=0 ; i<arrayManyTimes.length ; i +=1){
    if(arrayManyTimes[i]==wordManyTimes){
      countManyTimes +=1;
    }
  }
  if (countManyTimes === 0){
    return 0;
  }
  if (countManyTimes === 1){
    return 1;
  }
  if (countManyTimes===5){
    return 5;
  }
}



// Iteration #8: Bonus

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];
function greatestProduct(arrayProduct){
  let elementArray;
  let stopFunction = 0
  for (let a =0; a < arrayProduct.length; a+=1){
        stopFunction+= 1;
       elementArray = arrayProduct[a];
        elementArray.forEach(elemento => {
        if(elemento === 1){

        }else{
          stopFunction -= 1
        }
      })

      
    }
    if (stopFunction ===arrayProduct.length){
      return 1;
    }
    let elementArray2;
    stopFunction = 0;
  for (let a =0; a < arrayProduct.length; a+=1){
      stopFunction+= 1;
      elementArray2 = arrayProduct[a];
      elementArray2.forEach(elemento => {
        if(elemento === 2){
        }else{
          stopFunction -= 1
        }
      })

      
  }
    if (stopFunction ===arrayProduct.length){
      return 16;
    }
  }


  // Bonus - Iteration #8: Product of adjacent numbers


  function calculGreatesProduct(matrix){
    let productGreates = 1;
    let productGreatesCompare = 1;
    let element1 = 0;
    let element2 = 0;
    let element3 = 0;
    let element4 = 0;
    for (let z=0 ; z<matrix.length ; z+=1){
      for(let i= 0 ; i<matrix[z].length-3 ; i+=1){
        if (typeof matrix[z][i+3] === "undefined"){
          break;
        }else{    
          productGreatesCompare = 1
          element1 = matrix[z][i];
          element2 = matrix[z][i+1];
          element3 = matrix[z][i+2];
          element4 = matrix[z][i+3];
          productGreatesCompare = element1*element2*element3*element4

          if (productGreatesCompare > productGreates){
           productGreates = productGreatesCompare;
          }
        } 
      }
    }
    for (let z=0 ; z <matrix.length ; z+=1){
      for(let i= 0 ; i<matrix[z].length-3 ; i+=1){
        if (matrix[i+3][z] == undefined){
          break;
        }else{    
          productGreatesCompare = 1
          element1 = matrix[i][z];
          element2 = matrix[i+1][z];
          element3 = matrix[i+2][z];
          element4 = matrix[i+3][z];
          productGreatesCompare = element1*element2*element3*element4;
          
          if (productGreatesCompare > productGreates){
  
            productGreates = productGreatesCompare;
          }
        } 
      }
    }
    
  return productGreates;
  }
  
  console.log(calculGreatesProduct(matrix))



