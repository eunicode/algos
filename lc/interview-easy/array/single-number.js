/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
Single Number
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

Given a non-empty array of integers, every element appears twice except for one. 
Find that single one.

Note:
Your algorithm should have a linear runtime complexity. 
Could you implement it without using extra memory?
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

// VERSION #1 - indexOf() and lastIndexOf()
let singleNumber = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      return nums[i];
    }
  }
};

// VERSION #2 - Object

// VERSION #3 - 

// VERSION #4 - 

/* =================================================================  
  TESTS
================================================================= */

// console.log(singleNumber([2,2,1])); // 1

console.log(singleNumber([4,1,2,1,2])); // 4

/* =================================================================  
  NOTES
================================================================= */

/*
 */

/* =================================================================  
  TO DO
================================================================= */

/*
Solve without using indexOf() and lastIndexOf()
 */

/*
--------------------------------------------------------------------
*/
