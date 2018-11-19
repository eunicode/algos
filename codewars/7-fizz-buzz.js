/* =================================================================  
  INSTRUCTIONS
================================================================= */

/* 
Fizz Buzz
https://www.codewars.com/kata/fizz-buzz

Tags: ALGORITHMS, FUNDAMENTALS, NUMBERS, ARRAYS
*/

/* =================================================================  
  SOLUTIONS
================================================================= */

/*
 */

/* =================================================================  
  CODE
================================================================= */

function fizzbuzz(n) {
    // Generate an array with a range from 1 to n
    const range = generateRange(n);
    console.log({ range });

    const newRange = range.map( elm => {
        if (elm % 3 === 0 && elm % 5 === 0) {
            return "FizzBuzz";
        } else if (elm % 3 === 0) {
            return "Fizz";
        } else if (elm % 5 === 0) {
            return "Buzz";
        } else return elm;
    });

    return newRange;
}

function generateRange(length) {
    const range = [...new Array(length + 1).keys()];
    // console.log({ range }); // [0, 1, 2, 3, 4, 5]
    range.splice(0, 1);
    // console.log({ range }); // [1, 2, 3, 4, 5]
    return range;
}

// generateRange(5);

/* =================================================================  
  TESTS
================================================================= */

console.log(fizzbuzz(15));

/* =================================================================  
  NOTES
================================================================= */

/*
splice() returns deleted elements 

--------------------------------------------------------------------
Array() vs new Array()

What's the difference between Array(1) and new Array(1) in JavaScript?
https://stackoverflow.com/questions/5827008/whats-the-difference-between-array1-and-new-array1-in-javascript

--------------------------------------------------------------------
Range of Numbers

How to generate range of numbers from 0 to n in ES2015 only?
https://stackoverflow.com/questions/36947847/how-to-generate-range-of-numbers-from-0-to-n-in-es2015-only

[...Array(n).keys()];

Array.from(Array(n).keys());

function range (start, end) { 
    return [...Array(1 + end - start).keys()].map(v => start + v) 
}
 */

/* =================================================================  
  TO DO
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/
