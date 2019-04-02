const balancedBrackets = (str) => { 
    const bracketLookup = { 
      '(':')', 
      '[':']', 
      '{':'}'
    }
    let bracketStorage = []; 
    for (let strIdx = 0; strIdx < str.length; strIdx++){
      let char = str[strIdx]
      if (char === '(' || char === '[' || char === '{'){
        bracketStorage.push(char); 
      }
      //else if the current character is the bracket lookup value of the most recent char key  
     else if (char === bracketLookup[bracketStorage[bracketStorage.length-1]]){ 
       bracket.pop(); 
     }
    }
    return (!bracketStorage.length)
  }
  
  balancedBrackets('[][(){}'); // false
  balancedBrackets('({)}'); // false
  balancedBrackets('({[]})'); // true
  balancedBrackets('text ( is allowed ){rwwrwrrww [] ()}'); // true
  //gene chart that is aquarius midheaven