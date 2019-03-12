/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
350. Intersection of Two Arrays II
https://leetcode.com/problems/intersection-of-two-arrays-ii/

Given two arrays, write a function to compute their intersection.
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.

Follow up:
What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
 */

/* =================================================================  
  SOLUTIONS
================================================================= */

/*
WIP solution for first longest sequence in both arrays (misunderstood the problem): 
https://github.com/eunicode/algos/blob/4e798f9d72bae284bf4829e2a75c141040cd5a11/leetcode/interview-easy/arr-intersection-two-arrays-ii.js

 */

/* =================================================================  
  CODE
================================================================= */

/* eslint-disable */

var intersect = function(nums1, nums2) {
  // Find which array is shorter, and assign the shorter array to `short`,
  // and the longer array to `long`
  const len1 = nums1.length;
  const len2 = nums2.length;
  let short = nums1;
  let long = nums2;
  const intersection = [];
  
  if (len1 > len2) {
    short = [...nums2];
    long = [...nums1]
  }
  
  // Iterate through `short` array. S
  // See if element exists in `long` array. 
  // If it does, push it to `intersection` and delete it from `long`.
  for (const elm of short) {
    const longIdx = long.indexOf(elm);
    
    if (longIdx !== -1) {
      intersection.push(elm);
      long.splice(longIdx, 1);
    }
  }
  
  console.log({ intersection });
  console.log({ long })
  
  return intersection;
};

/* =================================================================  
  TESTS
================================================================= */

// console.log(intersect([1,2,2,1], [2,2])); // [2,2]

// console.log(intersect([4,9,5], [9,4,9,8,4])); // [4,9]

// console.log(intersect([1], [1])); // [1]

// console.log(intersect([], [])); // []

// console.log(intersect([2,1], [1,2])); // [1, 2]

console.log(intersect([9,8,3,6,9], [9,8,6,9])); // Two matches of equal length

/* =================================================================  
  NOTES
================================================================= */

/*
LESSONS LEARNED

- We can't use Set to get rid of duplicate arrays. Arrays are objects, objects have references, and therefore unique.

- Make sure the for loop's condition eventually evaluates to false, or memory will be exceeded. 
For example: 
for (let j = 0; j < big.length; i++) {...}
We never increment `j`, so the block code will run forever, and `i` will keep incrementing. 

- slice() ends extraction BEFORE endIndex

- The best way to delete an element from an array is with splice()

 */

/* =================================================================  
  TO DO
================================================================= */

/*
Make runtime faster
 */

/*
--------------------------------------------------------------------
*/
