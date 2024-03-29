/* =================================================================  
                          INSTRUCTIONS
================================================================= */

/*
First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.
So I grabbed Apple's stock prices from yesterday and put them in an array called stockPrices, where:
- The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
- The values are the price (in US dollars) of one share of Apple stock at that time.
So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.

Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

For example:
const stockPrices = [10, 7, 5, 8, 11, 9];
getMaxProfit(stockPrices); // Returns 6 (buying for $5 and selling for $11)

No "shorting"—you need to buy before you can sell. Also, you can't buy and sell in the same time step—at least 1 minute has to pass.

TAGS: GREEDY_, SINGLEPASS_

 */

/* =================================================================  
                          CODE
================================================================= */

/* eslint-disable */

// SOLUTION - NESTED FOR LOOPS
/* 
[1,2,3,4] 
We want all possible pairs (combination w/out repetition). 
Order doesn't matter in that (1,2) and (2,1) are the same; they have the same difference. 
We only use (1,2) instead of (2,1), bc we have to buy before we sell. 
We use a nested for loop. 
The outer for loop is the number of times we repeat the inner for loop block.
1. (1,2), (1,3), (1,4)
2. (2,3), (2,4)
3. (3,4)
The outer for loop is also the buy price. In the first outer for loop, it is $1
The inner for loop is the iteration of the array. 
(1,2), (1,3, (1,4)
It is also the sell price. In the first inner for loop, it is: $2, $3, $4
*/

function getMaxProfitB(stockPrices) {
  // If the array has 0 or 1 elements
  if (stockPrices.length === 0 || stockPrices.length === 1) {
    throw new Error('A profit or loss requires at least 2 prices');
  }

  // Initialize finalDiff to a difference that actually exists
  // Multiply by -1 bc I prefer to do `buy - sell` rather than `sell - buy`
  let finalDiff = (stockPrices[0] - stockPrices[1]) * -1;

  // Find all possible pairs w/ nested for loops
  // Outer for loop: number of times to repeat inner for loop
  for (let i = 0; i < stockPrices.length - 1; i++) {
    // We can stop at second to last element
    const start = stockPrices[i];

    // Inner for loop: iterate array
    for (let j = i + 1; j < stockPrices.length; j++) {
      // Iterate all the way to the last element
      const second = stockPrices[j];

      const diff = (start - second) * -1;
      // Update finalDiff with the greatest value
      if (diff > finalDiff) {
        finalDiff = diff;
      }
    }
  }

  return finalDiff;
}

/* -------------------------------------------------------------- */
// SOLUTION - ONE FOR LOOP
/*
We buy, then sell. 
profit = price2 - price1
For positive numbers, price1 should be low, price2 should be high. 

We're not just finding smallest value and biggest value. 
We're trying to find biggest difference btw a previous element and later element. Sliding window?
So for every element, we will
- keep track of lowest price we've seen so far
- see if we can get a better profit
We have a minPrice we have seen/passed. 
Then we check if the seen minPrice and the current value create a bigger profit. 
Example array: [4, 2, 8, 9]

Gotcha: Decreasing stock prices: [9, 8, 7, 3, 0]
If the price goes down, minPrice is set to currentPrice. 
That means `currentPrice - minPrice` is `currentPrice - currentPrice`. We're buying and selling at currentPrice, that's not allowed.
Also, `currentPrice - currentPrice = 0`, which is greater than negative profit, so we'll never get the corrent profit.
To avoid this problem and make sure you "buy" at earlier/seen price, calculate maxProfit before you update minPrice.

Summary: 
Initialize maxProfit and minPrice. 
Iterate array
- Test if `currentPrice - seen minPrice` gives greater profit. If so, update maxProfit.
- Update minPrice.

This is kinda like two-pointer, one pointer points to min, one pointer points to current element.
*/

function getMaxProfit(stockPrices) {
  if (stockPrices.length < 2) {
    throw new Error('Need at least 2 prices');
  }

  const arr = [...stockPrices];

  let maxProfit = arr[1] - arr[0]; // Difference btw first two elements
  let min = arr[0];

  // Start at second element. Otherwise, you'll get arr[0] - arr[0] situation
  for (let i = 1; i < arr.length; i++) {
    // Check if current element gives you new maxProfit
    let tempMax = arr[i] - min;

    // Update `maxProfit`
    if (tempMax > maxProfit) {
      maxProfit = tempMax;
    }

    // Update `min`
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return maxProfit;
}

/* =================================================================  
                          TESTS
================================================================= */

/* eslint-enable */

// Test Case: 'price goes up then down'
console.log(getMaxProfit([1, 5, 3, 2]));
// expected = 4

// Test Case: 'price goes down then up'
console.log(getMaxProfit([7, 2, 8, 9]));
// expected = 7

// Test Case: 'price goes up all day'
console.log(getMaxProfit([1, 6, 7, 9]));
// expected = 8

// Test Case: 'price goes down all day'
console.log(getMaxProfit([9, 7, 4, 1]));
// expected = -2

// Test Case: 'price stays the same all day'
console.log(getMaxProfit([1, 1, 1, 1]));
// expected = 0

// Test Case: error with empty prices aka empty array
console.log(getMaxProfit([]));
// expected = Error

// Test Case: 'error with one price'
console.log(getMaxProfit([1]));
// expected = Error

/* =================================================================  
                          NOTES
================================================================= */

/* 
RETURNING ERROR OBJECTS
We want to return errors if we have an array with 0 or 1 element, bc there is no possible profit or loss. We want to alert the user that something is wrong, or that there was 0 or 1 element.

--------------------------------------------------------------------
THROW
The throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.
 */

/* =================================================================  
                          TO DO
================================================================= */

/*
 */

/* =================================================================  
                          SOLUTIONS
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/

/* -------------------------------------------------------------- */
