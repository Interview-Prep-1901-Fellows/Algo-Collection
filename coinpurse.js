/*
Given an array of positive integers representing coin denominations and a single non-negative integer representing a target amount of money, implement a function that returns the smallest number of coins needed to make change for that target amount using the given coin denominations.
Note that an unlimited amount of coins is at your disposal. If it is impossible to make change for the target amount, return -1
*/


// Leet code refers to this approach — enumerating all subsets — as the 'trivial' solution
// Time complexity is exponential (I think) 

function myMinNumberOfCoinsForChange(n, denoms){
  let sums = denoms;
  let counter = 1;
  if(n === 0) return 0
  if(sums.includes(n)) return 1;

  while(sums.some(x => x < n)){
    let newSums = []
    console.log('newSums', newSums)
    counter++;
    console.log('counter', counter)
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

// myMinNumberOfCoinsForChange(7, [1, 5, 10])
// myMinNumberOfCoinsForChange(7, [1, 2, 3, 5])

// optimized: 

function coinChange(coins, amount) {
  coins.sort((a, b) => b - a);

  let res = Infinity;

  function helper(k, amount, count) {
    const coin = coins[k];

    // last smallest coin
    if (k === coins.length - 1) {
      if (amount % coin === 0) {
        res = Math.min(res, count + Math.floor(amount / coin));
      }
    } else {
      for (let i = Math.floor(amount / coin); i >= 0 && count + i < res; i--) {   // count + i < res is for pruning, avoid unnecessary calculation
        helper(k + 1, amount - coin * i, count + i);
      }
    }
  }

  helper(0, amount, 0);

  return res === Infinity ? -1 : res;
}


// coinChange([1, 5, 7, 10], 14);

