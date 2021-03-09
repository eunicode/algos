/* =================================================================  
                          INSTRUCTIONS
================================================================= */

/*
Primes with Even Digits
https://www.codewars.com/kata/582dcda401f9ccb4f0000025/train/javascript

Find the closest prime number under a certain integer n that has the maximum possible amount of even digits.

For n = 1000, the highest prime under 1000 is 887, having two even digits (8 twice)

f(1000) ---> 887 (even digits: 8, 8)

TAGS: 
 */

/* =================================================================  
                              CODE
================================================================= */

/* eslint-disable */

/*
SOLUTION - NAIVE

Find all primes
We want largest prime number with the most even digits, so we will test numbers in decreasing order. 
n = 25. 
outer for loop - iterate through all numbers
24 to 3 (We want greatest prime less than input. And there are no prime numbers after 2)
inner for loop - primality test, trial by division. Test if `i` is prime.
2 to √25
*/

function f(n) {
  if (n === 0 || n === 1 || n === 2) {
    throw new Error('No primes');
  }

  // Hash table to hold maxCount and prime numbers
  const ht = {};

  let maxCount = 0;
  let tempCount = 0;

  // Generate decreasing range of numbers
  for (let i = n - 1; i > 2; i--) {
    // Test if `i` is prime
    for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
      // `i` is divisible by a number, `i` is not prime. Break out of for loop
      if (i % j === 0) {
        break;
      }

      // If we reached the last trial division test, and i % j !==0, i is prime.
      if (i % j !== 0 && j === Math.floor(Math.sqrt(i))) {
        tempCount = howManyEvens(i);

        if (tempCount >= maxCount) {
          // If dict has count property,
          if (ht[tempCount]) {
            ht[tempCount].push(i);
          } else {
            ht[tempCount] = [i];
          }

          maxCount = tempCount;
        }
      }
    }
  }

  //   console.log({ maxCount })
  //   console.log( ht )
  return ht[maxCount][0];
}

/*
Count even digits in input
Create variable that holds # evens
Turn number into a string.
Split string into array of chars
Iterate array. 
Turn char into number, test if it's even
If it's even, increment count */
function howManyEvens(n) {
  let count = 0;
  const str = `${n}`;
  const arr = str.split('');

  for (const num of arr) {
    if (num % 2 === 0) {
      count++;
    }
  }
  //   console.log(`even count is ${count}`)
  return count;
}
/* =================================================================  
                              TESTS
================================================================= */

/* eslint-enable */

console.log(f(1000)); // 887
console.log(f(10000)); // 8887
console.log(f(500)); // 487
console.log(f(487)); // 467

/* =================================================================  
                              NOTES
================================================================= */

/*
Spend a lot of time thinking about the problem. 
It's rare/difficult for a prime number to have a lot of even digits.
If you can, use google to see all numbers under 300, to see a pattern. 
If you see a pattern, you can find code shortcuts, a way to code more easily, with better time complexity. 
For example, if an input has 3 numbers, the greatest number of even digits it can have is 2. If all 3 numbers are even, that number is even, and thus not a prime. 
Then we can decrement from input, and find first number that has two evens (or one). 
 */

/* =================================================================  
                              TO DO
================================================================= */

/*
 */

/* =================================================================  
                            DIVIDERS
================================================================= */

/*
--------------------------------------------------------------------
*/

/* -------------------------------------------------------------- */

/* ================================================================= */
