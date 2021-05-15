/* =================================================================  
                          INSTRUCTIONS
================================================================= */

/*
27. Remove Element
https://leetcode.com/problems/remove-element/

Intro to Data Structure: Array and String > Two-Pointer Technique

tags: easy, array

INSTRUCTIONS
[3,2,2,3] & 3 // [2,2] or length 2
[0,1,2,2,3,0,4,2] & 2 // [0,1,3,0,4] or length 5

--------------------------------------------------------------------
REQUIREMENTS
O(1) space

--------------------------------------------------------------------
ASSURANCES
Order of elements can be arbitrary

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

// SOLUTION #1: TWO-POINTER

let removeElement = function(nums, val) {
  let slow = 0; // Bookmark
  // let fast; `i` ended up being the fast runner

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[slow] = nums[i];
      slow += 1;
    }
  }

  // console.log({ nums });
  // console.log({ slow });

  // Return the length of the "new" array
  return slow;
};

/* =================================================================  
                          TESTS
================================================================= */

/* eslint-enable */

console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5

/* =================================================================  
                          NOTES
================================================================= */

/*
TWO POINTER TECHNIQUE

Slow pointer just points at item to be overwritten
Slow pointer is just bookmark 

Fast pointer simply iterates the array

Overwrite when we reach a non-target value
REVELATION: We don't care about elements that equal the target value!!! 
When we reach target value, no need to do anything.

We only care about non-target values. 
Every non-target element should be saved.

SUMMARY
Set slow pointer to 0. 
Iterate array. 
If we reach a non-target value, we overwrite the value the slow-runner points at with the non-target value. 
Then we increment slow pointer. 
Repeat. 

When we finish iterating the array, the slow pointer will point at the next index to overwrite. 
Which is equivalent to the index of the last overwritten value + 1. 
Or, in other word, is equivalent to the length of the "new" array. 
 */

/* =================================================================  
                          TO DO
================================================================= */

/*
Solve this with a while loop
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
