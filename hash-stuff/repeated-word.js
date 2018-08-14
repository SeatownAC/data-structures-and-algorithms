'use strict';

const repeatedWord = (str) => {
  const firstStr = str.toLowerCase();
  const secondStr = firstStr.split(' ');
  const length = secondStr.length;
  let sameWord = false;
 
  for (let i = 0; i < length; i++) {
    if (sameWord) {
      break;
    }
    for (let j = i + 1; j < length; j++) {
      if (secondStr[j] === secondStr[i]) {
        
        sameWord = true;
        break;
      }
    }
  }
  
};

export default repeatedWord;
