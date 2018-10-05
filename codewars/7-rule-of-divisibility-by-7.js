/* =================================================================  
  THE PROBLEM
================================================================= */

/* 

A Rule of Divisibility by 7
https://www.codewars.com/kata/a-rule-of-divisibility-by-7/train/javascript

#Instructions

A number m of the form 10x + y is divisible by 7 if and only if x − 2y is divisible by 7. 
In other words, subtract twice the last digit from the number formed by the remaining digits. 
Continue to do this until a number known to be divisible or not by 7 is obtained; you can stop when 
this number has at most 2 digits because you are supposed to know if a number of at most 2 digits is 
divisible by 7 or not.

The original number is divisible by 7 if and only if the last number obtained using this procedure is 
divisible by 7.

#Examples:

#1
m = 371 -> 37 − (2×1) -> 37 − 2 = 35 ; thus, since 35 is divisible by 7, 371 is divisible by 7.
The number of steps to get the result is 1.

#2 
m = 1603 -> 160 - (2 x 3) -> 154 -> 15 - 8 = 7 and 7 is divisible by 7.

#3 
m = 372 -> 37 − (2×2) -> 37 − 4 = 33 ; thus, since 33 is not divisible by 7, 372 is not divisible by 7.
The number of steps to get the result is 1.

#4 
m = 477557101->47755708->4775554->477547->47740->4774->469->28 and 28 is divisible by 7, so is 477557101.
The number of steps is 7.

#Task

Your task is to return to the function seven(m) (m integer >= 0) an array (or a pair, 
depending on the language) of numbers, the first being the last number m with at most 2 digits obtained 
by your function (this last m will be divisible or not by 7), the second one being the number of steps 
to get the result.

Tags: fundamentals
My tags: recursion

*/

/* =================================================================  
  THE SOLUTIONS
================================================================= */  

/*

Solve with global count variable, and reset global count variable at the end, so when I can call the 
function again, the count will be 0 again. 
https://github.com/eunicode/algos/blob/5506fc40624ab06f09882df1eed653f6d925df20/codewars/7-rule-of-divisibility-by-7.js

Solve without global variable by wrapping function (`recursion`) in outer function (`seven`), and 
putting the count variable in the outer function, and referencing the count variable in the inner function.
https://github.com/eunicode/algos/blob/6c9602cafdfab9c77fb9dde4adcf2b0012b70060/codewars/7-rule-of-divisibility-by-7.js

Note: This isn't leveraging closure bc the inner function isn't returned and called outside of where
it was declared (i.e. it isn't called/executing outside its lexical scope).
We're using recursion and pushing new execution contexts onto the call stack.
Execution contexts have access to the variable environments in execution contexts below them.
So we're leveraging lexical scope look-up rules.
An example of closure would be a function + variables that are still alive even though the relevant 
execution context has been popped off the call stack.

*/

/* =================================================================  
  THE CODE
================================================================= */ 

function seven(m) {
  let count = 0;

  function recursion(num) {
    // Get last digit of given number
    const lastDigit = num % 10;
    console.log("lastDigit: ", lastDigit);

    // Get rest of digit
    const headDigit = Math.trunc(num/10);
    console.log("headDigit: ", headDigit);

    // If headDigit is 10x, reducedDigit is x - 2y. 
    // Else reducedDigit is just num and we can return the array.
    let reducedDigit = num;

    if (headDigit.toString().length >= 2) {
      reducedDigit = headDigit - 2 * lastDigit;
      console.log("reducedDigit: ", reducedDigit);
    } else {
      return [num, count];
    }

    const array = [];

    // Increment count if num is 10x and we go through the x - 2y process. 
    count++;

    // Account for edge case seven(0)
    if (num === 0 && count === 1) {
      count = 0;
    }
    console.log("count: ", count);

    // Recursion

    // Base case
    // Once headDigit is two digits, that will be the last step because reducedDigit will be the number we want. 
    if (headDigit.toString().length === 2) {
      array.push(reducedDigit, count);
      // Reset count to 0 when function has completed running (call stack)
      count = 0;
      return array;
    }

    // Recursive case
    // If headDigit is > two digits, we can do more steps.
    else {
      return recursion(reducedDigit);
    }
  }

  return recursion(m);
}

// Edge cases
// The given number is not 10x, that is, the number is only one digit. 
// seven(0) // [0, 0]
// seven(7) // [7, 0]

// Random tests
// seven(1041074) // [89, 4]
// seven(1065409) // [88, 4]
// seven(1072614) // [99, 4]
// seven(109349) // [90, 4]
// seven(1125749) // [95, 4]

// seven(371) // [35, 1]
// seven(483) // [42, 1]
// seven(1603) // [7, 2]
// seven(31976) // A multiple of 7

// console.log(seven(1125749));
// console.log(seven(7));
console.log(seven(1603));
// console.log(seven(1041074));

/* =================================================================  
  THE NOTES
================================================================= */  

/*

#Notes #1
Code passed all tests and was submitted to Code Wars!
Next step is to refactor this algo so I'm not using global variables.
I can try leveraging scope or closure.  

#Notes #2
Can't use closure bc CodeWars runs tests by calling seven(someRandomNumber). 
To use closure, we'd need to call two functions, first the outer function, 
then the inner function returned by the outer function. 
CodeWars only calls one function. 
Maybe I could use promises + `then` method? 
Or currying? 

TO DO LIST
Refactor this by dealing with situations when the given number is only one digit.
Research currying

*/
