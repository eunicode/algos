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

TAGS: SINGLE-PASS, GREEDY, GREEDY-ALGOS, GREEDY_, SINGLEPASS_

 */

/* =================================================================  
                          CODE
================================================================= */

/* eslint-disable */

// SOLUTION - NESTED FOR LOOPS
/* 
[1,2,3,4] 
We want all possible pairs (combination w/out repetition). 
Order doesn't matter in that (1,2) and (2,1) are the same. 
We only care about/use (1,2) bc we have to buy before we sell. 
We use a nested for loop. 
The outer for loop is the number of times we repeat the inner for loop block.
1. (1,2), (1,3), (1,4)
2. (2,3), (2,4)
3. (3,4)
It is also the buy price. In the first outer for loop, it is 1
The inner for loop is the iteration of the array. 
12, 13, 14
It is also the sell price. In the first inner for loop, it is: 2, 3, 4
*/

function getMaxProfit(stockPrices) {
  // If the array has 0 or 1 elements
  if (stockPrices.length === 0 || stockPrices.length === 1) {
    throw new Error('A profit or loss requires at least 2 prices')
  } 

  // Initialize finalDiff to a difference that actually exists
  // Multiply by -1 bc I prefer to do `buy - sell` rather than `sell - buy`
  let finalDiff = (stockPrices[0] - stockPrices[1]) * -1

  // Find all possible pairs w/ nested for loops
  // Outer for loop: number of times to repeat inner for loop
  for (let i = 0; i < stockPrices.length - 1; i++) { // We can stop at second to last element
    let start = stockPrices[i];

    // Inner for loop: iterate array
    for (let j = i+1; j < stockPrices.length; j++) { // Iterate all the way to the last element
      let second = stockPrices[j]

      let diff = (start - second) * -1
      // Update finalDiff with the greatest value
      if (diff > finalDiff) {
        finalDiff = diff
      }
    }
  }

  return finalDiff;
}

/* -------------------------------------------------------------- */
// SOLUTION - ONE FOR LOOP


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
