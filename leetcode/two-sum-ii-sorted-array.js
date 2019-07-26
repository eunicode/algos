/* =================================================================  
                          INSTRUCTIONS
================================================================= */

/*
Two Sum II - Input array is sorted
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

Intro to Data Structure: Array and String

Tags: easy, two pointer, array

--------------------------------------------------------------------
REQUIREMENTS
We're not allowed to use same element twice
index1 must be less than index2

OUTPUT
Array of 1-based indices

--------------------------------------------------------------------
ASSURANCES

Array is sorted in ascending order, from least to greatest
There is exactly one solution
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

// SOLUTION #1 - BRUTE FORCE, NAIVE
// Similar to Bubble Sort

let twoSum = function(numbers, target) {
  const len = numbers.length;

  // [2, 7, 11, 15]
  for (let i = 0; i < len - 1; i++) {
    for (let j = 1; j < len; j++) {
      // console.log({ i, j });
      // console.log(numbers[i] + numbers[j]);

      if (i !== j && numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }

  // console.log('no answer');
  return [];
};

/* -------------------------------------------------------------- */

// let twoSum = function(numbers, target) {

// }

/* =================================================================  
                          TESTS
================================================================= */

console.log(twoSum([2, 7, 11, 15], 9)); // [1,2]
console.log(twoSum([2, 7, 11, 15], 26)); // [3,4]
console.log(twoSum([2, 7, 11, 15], 22)); // [2,4]
console.log(twoSum([0, 3, 4, 6], 9)); // [2,4]
console.log(twoSum([0, 3, 4, 6], 6)); // [1,4]
console.log(twoSum([0, 3, 4, 6], 11)); // []

/* =================================================================  
                          NOTES
================================================================= */

/*
LESSONS LEARNED

* We can have JS in console.log()
console.log( numbers[i] + numbers[j] )

* We can have expressions inside arrays
We can do return [i + 1, j + 1]

 */

/* =================================================================  
                          TO DO
================================================================= */

/*
Solve with binary search
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
