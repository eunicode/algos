/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
Remove Duplicates from Sorted Array
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
https://leetcode.com/problems/remove-duplicates-from-sorted-array/solution/
https://leetcode.com/submissions/detail/231867166/

Given nums = [1,1,2],
Your function should return length = 2, 
with the first two elements of nums being 1 and 2 respectively.

Given nums = [0,0,1,1,1,2,2,3,3,4],
Your function should return length = 5, 
with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

REQUIREMENTS
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

 */

/* =================================================================  
  PRE-NOTES
================================================================= */

/* 
ASSURANCES / OBSERVATIONS

--------------------------------------------------------------------
PLAN
*/

/* =================================================================  
  CODE
================================================================= */

/* eslint-disable */

let removeDuplicates = function(nums) {
  let deleteCount = 0;
  const lengthDupe = nums.length;

  for (let i = 0; i < lengthDupe; i++) {
    if (nums[i - deleteCount] === nums[i + 1 - deleteCount]) {
      nums.splice(i - deleteCount, 1);
      deleteCount += 1;
    }
  }

  console.log({ nums });

  return nums.length;
};

/* =================================================================  
  TESTS
================================================================= */

// console.log(removeDuplicates([1, 1, 2]));
// [1, 2] and length 2

// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
// [0,1,2,3,4] and length 5

// console.log(removeDuplicates([0,3,3,5,5,7]));

console.log(removeDuplicates([6,6,3,2,1,1,1]));

/* =================================================================  
  NOTES
================================================================= */

/*
for (let i = 0; i < nums.length; i++) 
We are mutating `nums` by removing duplicates in-place, therefore the condition
`nums.length` isn't reliable bc the length of `nums` will be changing. 

With the splice() method, the duplicates get removed even if the array isn't sorted.
 */

/* =================================================================  
  TO DO
================================================================= */

/*
Solve without using `lengthDupe`
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
