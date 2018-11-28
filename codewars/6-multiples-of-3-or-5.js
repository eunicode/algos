/* =================================================================  
  INSTRUCTIONS
================================================================= */

/* 

Multiples of 3 or 5
https://www.codewars.com/kata/multiples-of-3-or-5/train/javascript

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 
3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 
below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of ProjectEuler.net

Tags: MATHEMATICS, NUMBERS

*/

/* =================================================================  
  CODE
================================================================= */

function solution(number) {
  // Check if number is negative. If so, we can return 0, because the problem
  // stipulates that we add up multiples of 3 or 5 BELOW the given number
  if (number < 0) {
    return 0;
  }

  // Create an array with a range of numbers from 0 to x; x is exclusive.
  const emptyArr = new Array(number);
  const range = [...emptyArr.keys()];
  console.log({ range });

  const multiples = [];

  // Add multiples of 3 to array
  range.forEach(curr => {
    if (curr % 3 === 0) {
      multiples.push(curr);
    }
  });
  console.log({ multiples });

  // Add multiples of 5 to array if that multiple isn't already in the array
  range.forEach(curr => {
    if (curr % 5 === 0 && multiples.includes(curr) === false) {
      multiples.push(curr);
    }
  });
  console.log({ multiples });

  // Sum up array
  const total = multiples.reduce((acc, curr) => acc + curr, 0);
  console.log({ total });

  return total;
}

console.log(solution(0));

// Edge cases
// Given number is 0, or 2, a number without any multiples of 3 or 5
// 1. We need to return 0
// 2. Empty array + reduce() with no initialValue -> TypeError

// Given number is negative / non-integer / not a number.
// new Array(-1) -> RangeError: invalid array length

/* =================================================================  
  NOTES
================================================================= */

/*

This reminds me of FCC's Sum All Primes challenge.
CodeFights/CodeSignal's First Duplicate challenge.

Natural numbers = counting numbers, may or may not include 0.
Non-negative integers = 0, 1, 2, 3, etc.
Positive integers = 1, 2, 3, etc.

Generate range
https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp

Array constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
https://stackoverflow.com/questions/4395429/is-array5-equivalent-to-var-a-a-length-5-in-js

Array constructor and `new` operator
https://stackoverflow.com/questions/26496609/why-do-we-need-the-new-keyword-when-creating-an-array

Check if an array has a value
includes()
indexOf()

arrayLength in Array constructor cannot be negative
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_array_length
If the argument passed to the Array constructor is any other number than an 
integer between 0 and 2^32-1 (inclusive), a RangeError exception is thrown.

TO DO
Solve without includes() method
Solve so you can find the sum even if the argument is negative. E.g. [-6, -3, 0]

*/
