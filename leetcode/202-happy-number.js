/* =================================================================  
                          INSTRUCTIONS
================================================================= */

/*
INSTRUCTIONS

202. Happy Number
https://leetcode.com/problems/happy-number/

A happy number is a number defined by the following process: 
Starting with any positive integer, 
replace the number by the sum of the squares of its digits, 
and repeat the process until the number equals 1 (where it will stay), 
or it loops endlessly in a cycle which does not include 1. 
Those numbers for which this process ends in 1 are happy numbers.

Example
Input: 19
Output: true
Explanation: 
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

MY TAGS: recursion, while loop, math, hash table, cycle

--------------------------------------------------------------------
REQUIREMENTS

--------------------------------------------------------------------
GIVEN / ASSURANCES

 */

/* =================================================================  
                          PRE-NOTES
================================================================= */

/* 
OBSERVATIONS

--------------------------------------------------------------------
PLAN
*/

/* =================================================================  
                          CODE
================================================================= */

/* eslint-disable */

// ATTEMPT #1

/*
Convert number to string
Split string into array of num-strings
Iterate array, and square and add every num-string
End while loop if sum is 1 or given number. 
*/

// const isHappy = function(n) {
//   let nStr;
//   let nSplit;
//   let sum = null;
//   let sumTemp = n; // Use sumTemp bc while loop condition is `sum !== 1`

//   if (n === 1) {
//     return true;
//   }

//   // End case #1: sum simplifies to 1.
//   while (sum !== 1) {
//     nStr = sumTemp.toString();

//     nSplit = nStr.split('');

//     sumTemp = nSplit.reduce(
//       (acc, curr) => Number.parseInt(acc) ** 2 + Number.parseInt(curr) ** 2
//     );
//     console.log({ sumTemp });

//     // Update `sum` for while loop condition
//     sum = sumTemp;

//     // End case #2: sum returns to given number
//     if (sum === n) {
//       break; // Exit while loop
//     }
//   }

//   return sum === 1 ? true : false;
// };

/* -------------------------------------------------------------- */
// ATTEMPT #2

// const isHappy = function(n) {
//   if (n === 1) {
//     return true;
//   }

//   let sum = null;

//   let store = {};

//   // End case #1: `sum` simplifies to 1.
//   while (sum !== 1) {
//     // Convert given number to array of single digit numbers
//     let numArr = (n).toString().split("").map( x => Number.parseInt(x));

//     // Add up the squares of numbers in array
//     sum = numArr.reduce(
//       (acc, curr) => acc + curr ** 2, 0 // start at 0 to get correct squaring addition results
//     );

//     // Collect all the sums. This is so we can detect a repetition. 
//     store[sum] = 1; // 1 is truthy

//     // End case #2: There is a cycle. 
//     // The sum exists in `store` object. 
//     // store[x] is truthy if x exists. store[x] is `undefined`, or falsy if x doesn't exist
//     if (store[sum]) { 
//       break; // Exit while loop
//     }
//   }

//   return sum === 1 ? true : false;
// };

/* -------------------------------------------------------------- */
// ATTEMPT #3

// const isHappy = function(n) {
//   if (n === 1) {
//     return true;
//   }

//   let sum = null;

//   let store = {};

//   // End case #1: `sum` simplifies to 1.
//   while (sum !== 1) {
//     // Convert given number to array of single digit numbers
//     let numArr = (n).toString().split("").map( x => Number.parseInt(x));

//     // Add up the squares of numbers in array
//     sum = numArr.reduce(
//       (acc, curr) => acc + curr ** 2, 0 // start at 0 to get correct squaring addition results
//     );

//     // End case #2: There is a cycle. 
//     // The sum exists in `store` object. 
//     // store[x] is truthy if x exists. store[x] is `undefined`, or falsy if x doesn't exist
//     if (store[sum]) { 
//       break; // Exit while loop
//     }

//     // Collect all the sums. This is so we can detect a repetition. 
//     store[sum] = 1; // 1 is truthy
//   }

//   return sum === 1 ? true : false;
// };

/* -------------------------------------------------------------- */
// ATTEMPT #4 - SOLUTION

const isHappy = function(n) {
  if (n === 1) {
    return true;
  }

  let sum = null;
  let sumTemp = n; // We need a second `sum` variable, bc the 1st `sum` is for 
  // the while loop condition. The 2nd sum variable is for updating the sum value for 
  // each loop. 

  let store = {};

  // End case #1: `sum` simplifies to 1.
  while (sum !== 1) {
    // Convert given number to array of single digit numbers
    let numArr = (sumTemp).toString().split("").map( x => Number.parseInt(x));

    // Add up the squares of numbers in array
    sumTemp = numArr.reduce(
      (acc, curr) => acc + curr ** 2, 0 // start at 0 to get correct squaring addition results
    );

    // End case #2: There is a cycle. 
    // The sum exists in `store` object. 
    // store[x] is truthy if x exists. store[x] is `undefined`, or falsy if x doesn't exist
    if (store[sumTemp]) { 
      break; // Exit while loop
    }

    // Collect all the sums. This is so we can detect a repetition. 
    store[sumTemp] = 1; // 1 is truthy

    sum = sumTemp
  }

  return sum === 1 ? true : false;
};

/* =================================================================  
                          TESTS
================================================================= */

/* eslint-enable */

console.log(isHappy(19)); // true. Sum is 1.
// console.log(isHappy(20)); // false. Sum returns to 20.
// console.log(isHappy(2)); // false
// console.log(isHappy(1)); // true

/* =================================================================  
                          NOTES
================================================================= */

/*
This reminds me of binomial theorem? Euclid's algorithm? 

--------------------------------------------------------------------
MY LESSONS
Can't do this in while loop: 
while (sum !== 1) 
The while loop will go on forever. 

--------------------------------------------------------------------
How to turn number to string: 

(7).toString()

How to turn string to number: 

Number.parseInt('7')

--------------------------------------------------------------------
Waiting for debugger to disconnect… - Node.js in VSCode
https://stackoverflow.com/questions/47701801/waiting-for-debugger-to-disconnect-node-js-in-vscode

--------------------------------------------------------------------
MY MISTAKES

MISUNDERSTOOD PROBLEM DEFINITION OF 'CYCLE'

The problem says "it loops endlessly in a cycle which does not include 1".
I thought this meant that if it started with 2, it would return to 2. 
I was wrong. There is a cycle with 2, but it does not include the starting number, 2.
2, 
4, 16, 37, 58, 89, 145, 42, 20, 
4, 16, 37, 58, 89, 145, 42, 20, etc

--------------------------------------------------------------------
WRONG REDUCE() CALLBACK FUNCTION

sumTemp = nSplit.reduce(
  (acc, curr) => Number.parseInt(acc) ** 2 + Number.parseInt(curr) ** 2
);
The problem is that if I have an array with more than 2 numbers, I will square 
the accumulator. I don't want to do that.

RESULT
[1, 2, 3]
1^2 + 2^2 = 5 <-- 5 gets squared. I don't want that.
5^2 + 3^2 = 34

 */

/* =================================================================  
                          TO DO
================================================================= */

/*
Refactor
Rewrite with recursion
Review whether let variables get hoisted
 */

/* =================================================================  
                          SOLUTIONS
================================================================= */

/*
OTHERS
https://leetcode.com/problems/happy-number/discuss/411473/JavaScript-Solution-w-Explanation

place value
Set

*/

/*
--------------------------------------------------------------------
*/

/* -------------------------------------------------------------- */
