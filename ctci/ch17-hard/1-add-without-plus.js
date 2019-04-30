/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
Add Without Plus: Write a function that adds two numbers. 
You should not use + or any arithmetic operators.
 */

/* =================================================================  
  SOLUTIONS
================================================================= */

/*
 */

/* =================================================================  
  CODE
================================================================= */

/* eslint-disable */

/*
5 = 101
3 = 011
 */

 // ITERATIVE SOLUTION

function getSumI(a, b) {
  // console.log('XOR: ', a ^ b);
  // console.log('AND: ', a & b);

  let sum = 0;
  let carry = 0;

  // `b` is `carry` bit
  while (b !== 0) {
    // Add
    // XOR satisfies 1+0 = 0, 1+1 = 0
    sum = a ^ b;

    // Carry the one
    // AND satisfies 1+0 = 0, 1+1 = 1
    // When we do 1+0, we have nothing to carry over,
    // when we do 1+1, we have something to carry over
    // Shift the one to the left
    carry = (a & b) << 1;

    // Update `a` and `b` values
    a = sum;
    b = carry;
  }

  return sum;
}

/* -------------------------------------------------------------- */
// RECURSIVE SOLUTION
function getSum(a, b) {
  let sum = 0;
  let carry = 0;

  // base case
  if (b === 0) {
    return a
  }
  // recursive case
  else {
    sum = a ^ b;
    carry = (a & b) >> 1;
    a = sum;
    b = carry;
    return getSum(a, b);
  }
}

/* =================================================================  
  TESTS
================================================================= */

console.log(getSum(5, 3)); // 8

console.log(getSum(19, 44)); // 63

console.log(getSum(103, 298)); // 401

console.log(getSum(-100, 1)); // -99

// negative numbers
// Overflow, numbers larger than 32-bit signed integer
// Decimals

/* =================================================================  
  NOTES
================================================================= */

/*
Use bitwise operators instead of arithmetic operators
Bitwise operators will "convert" decimal numbers to binary numbers

ADDITION

When we do 0 + 0, we want 0
When we do 0 + 1, we want 1
When we do 1 + 0, we want 1
When we do 1 + 1, we want 0, and to carry the 1
Make truth tables to find out which bitwise operator we want

AND
1 + 1 = 1

OR
1 + 0 = 1
0 + 1 = 1
1 + 1 = 1

XOR
1 + 0 = 1
0 + 1 = 1
1 + 1 = 0

XOR is the winner

--------------------------------------------------------------------
CARRY THE ONE

When adding binary numbers, 1 + 1 = 0, 
but it also produces 1 which we carry over. 

AND gives us 1 when we do 1 + 1. 

LEFT SHIFT operator will carry the 1 over one position to the left. 

--------------------------------------------------------------------
BITWISE - RANDOM

Bitwise operators treat their operands as a sequence of 32 bits...
Bitwise operators perform their operations on such binary representations, 
but they return standard JavaScript numerical values.

^ (Bitwise XOR)
Performs the XOR operation on each pair of bits.

--------------------------------------------------------------------
MY QUESTION

If I have to carry a number, how do I do add three numbers together? 
For example, 1 + 1 + 0? 
Bitwise operators work on pairs of bits. 

Answer: Use recursion or while loop. 
Have a `sum` variable and a `carry` variable. 
Add `sum` variable and `carry` variable. 

REVELATION
You can do this in steps. You don't have to do it all at once.
We add the first carry over 1.
Then we add the second carry over 1. 
Repeat until there are no more carry over 1's. 

*/

/* =================================================================  
  TO DO
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/

/* -------------------------------------------------------------- */