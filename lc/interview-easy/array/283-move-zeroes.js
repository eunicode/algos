/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
283. Move Zeroes
https://leetcode.com/problems/move-zeroes/

Given an array nums, write a function to move all 0's to the end of it, while maintaining the relative order of the non-zero elements.

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
 */

/* =================================================================  
  PRE-NOTES
================================================================= */

/* 
ASSURANCES / OBSERVATIONS

--------------------------------------------------------------------
PLAN
[0,1,0,3,12]
 0 1 2 3 4
 
[1,0,3,12,0]
 0 1 2  3 4

*/

/* =================================================================  
  CODE
================================================================= */

/* eslint-disable */

/* @return {void} Do not return anything, modify nums in-place instead. */

// SOLUTION #1 - SPLICE()

// let moveZeroes = function(nums) {
//   let zeroCount = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i - zeroCount] === 0) {
//       nums.splice(i - zeroCount, 1);
//       zeroCount += 1;
//       nums.push(0);
//     }
//   }

//   console.log({ nums });
// };

// SOLUTION #2 - SWAPPING INDICES, NO STANDARD FUNCTIONS

const moveZeroes = function(nums) {
  // New index position for non-zero numbers
  let pos = 0;

  // Copy non-zero numbers and 'paste' them over leading elements
  // [0,4,0,3] --> [4,3,0,3]
  for (let i = 0; i < nums.length; i++) {
    // If element is a non-zero number, we want to paste it in the front
    if (nums[i] !== 0) {
      nums[pos] = nums[i];

      pos += 1; // Only increment bookmark if we hit a non-zero number
    }
  }

  // Replace the trailing elements with zeroes
  // [4,3,0,3] --> [4,3,0,0]
  // j = pos bc `pos` is the bookmark that separates the non-zero portion from
  // the zero portion
  for (let j = pos; j < nums.length; j++) {
    nums[j] = 0;
  }

  return nums;
}

/* =================================================================  
  TESTS
================================================================= */

console.log(moveZeroes([0,1,0,3,12]));
// [1,3,12,0,0]

console.log(moveZeroes([9,0,3,4,0]));

console.log(moveZeroes([0,0]));

console.log(moveZeroes([1,1]));

/* =================================================================  
  NOTES
================================================================= */

/*
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
