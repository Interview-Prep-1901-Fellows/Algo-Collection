/*
Given an array of positive integers representing coin denominations and a single non-negative integer representing a target amount of money, implement a function that returns the smalelst number of coins needed to make change for that target amount using the given coin denominations. Not that an unlimited amount of coins is at your disposal. If it is impossible to make changefor the target amount, return -1. 

sample input: 7, [1, 5,10]
sample output: 3 (2x1 + 1x5)
*/

//Brute Force Solution: 
function myMinNumberOfCoinsForChange(n, denoms){
  let sums = denoms;
  let counter = 1;
  if(n === 0) return 0
  if(sums.includes(n)) return 1;

  while(sums.some(x => x < n)){
    let newSums = []
    counter++;
    for (let j = 0; j < sums.length; j++){
      for(let i = 0; i < denoms.length; i++){
        let curr = sums[j] + denoms[i]
        if(curr === n) return counter;
        newSums.push(curr)
      }
    }
    sums = newSums  
  }
  return -1
}

