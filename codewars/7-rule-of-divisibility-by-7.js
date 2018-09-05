/* 
A Rule of Divisibility by 7
https://www.codewars.com/kata/a-rule-of-divisibility-by-7/train/javascript

#Instructions
A number m of the form 10x + y is divisible by 7 if and only if x − 2y is divisible by 7. In other words, subtract twice the last digit from the number formed by the remaining digits. Continue to do this until a number known to be divisible or not by 7 is obtained; you can stop when this number has at most 2 digits because you are supposed to know if a number of at most 2 digits is divisible by 7 or not.

The original number is divisible by 7 if and only if the last number obtained using this procedure is divisible by 7.

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

#Task: Your task is to return to the function seven(m) (m integer >= 0) an array (or a pair, depending on the language) of numbers, the first being the last number m with at most 2 digits obtained by your function (this last m will be divisible or not by 7), the second one being the number of steps to get the result.
*/

let count = 0;

function seven(m) {
    // Get last digit of given number
    const lastDigit = m % 10;
    console.log("lastDigit: ", lastDigit);

    // Get rest of digit
    const headDigit = Number(m.toString().substring(0, m.toString().length - 1));
    console.log("headDigit: ", headDigit)
    
    // Reduce digit x − 2y
    const reducedDigit = headDigit - (2 * lastDigit);
    console.log("reducedDigit: ", reducedDigit);
    
    const array = [];

    count++;
    // Account for edge case seven(0)
    if (m === 0 && count === 1) {
      count = 0;
    }
    console.log("count: ", count);
    
    // Recursion

    // Base case
    if (headDigit.toString().length === 2 || headDigit.toString().length === 1) {
      array.push(reducedDigit, count);
      // Reset count to 0 when function has completed running (call stack)
      count = 0;
      return array;
    }
    
    // Recursive case
    else {
      return seven(reducedDigit);
    }
}

// Failed
// seven(0) // [0, 0]
// seven(1125749) // [95, 4]
// seven(109349) // [90, 4]

// seven(371) // [35, 1]
// seven(483) // [42, 1]
// seven(1603) // [7, 2]
// seven(31976) // A multiple of 7
console.log(seven(1603));

/*
#Notes 
Code passed all tests and was submitted to Code Wars!
Next step is to refactor this algo so I'm not using global variables.
I can try leveraging scope or closure.  
*/ 
