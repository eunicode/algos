/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
Two Sum
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

RULES
- May not use same element twice
- Return indices of the number 
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

var twoSum = function(nums, target) {
  // Outer loop. Iterate `nums`
  for (let i = 0; i < nums.length; i++) {
    // Sum element with other elements (distributive)
    // j is i+1 bc if we've checked arr[0] + arr[1], then we've checked arr[1] + arr[0]
    for(let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

/* =================================================================  
  TESTS
================================================================= */

console.log(twoSum([2, 7, 11, 15], 9));
// [0, 1]

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

/*
--------------------------------------------------------------------
*/
