function braces(str) {
 let stack = [];
 for (let i = 0; i < str.length; i++) {
   if ((str[i] === '(') || (str[i] === '+') || (str[i] === '-') || (str[i] === '*') || (str[i] === '/')) {
     stack.push(str[i]);
   } else if (str[i] === ')'){
     let redundant = true;
     while (stack[stack.length-1] !== '(') {
       stack.pop();
       redundant = false;
     }
     if (redundant) return true;
     stack.pop()
   }
 }
 return false;
}
