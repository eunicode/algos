/* =================================================================  
                          INSTRUCTIONS
================================================================= */

/*
167. Two Sum II - Input array is sorted
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

/* eslint-disabl e */

// SOLUTION #1 - BRUTE FORCE, NAIVE
// Similar to Bubble Sort

// let twoSum = function(numbers, target) {
//   const len = numbers.length;

//   // [2, 7, 11, 15]
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = 1; j < len; j++) {
//       // console.log({ i, j });
//       // console.log(numbers[i] + numbers[j]);

//       if (i !== j && numbers[i] + numbers[j] === target) {
//         return [i + 1, j + 1];
//       }
//     }
//   }

//   // console.log('no answer');
//   return [];
// };

/* -------------------------------------------------------------- */

const twoSum = function(numbers, target) {
  // Create map object
  const hmap = new Map();
  let remainder;

  // Add key-value pairs to map: key = number, value = index
  for (let i = 0; i < numbers.length; i++) {
    hmap.set(numbers[i], i);
  }

  // Check to see if current value's complement exists in map
  for (let i = 0; i < numbers.length; i++) {
    // remainder = target - current
    remainder = target - numbers[i];

    if (hmap.has(remainder)) {
      return [i + 1, hmap.get(remainder) + 1];
    }
  }

  return [];
};

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

--------------------------------------------------------------------
MAP 

Assume that a map object uses a hash table under-the-hood so that search is O(1)

Methods
mapObj.has(key)
mapObj.set(key, value)
mapObj.get(key)
We can get value from key with get()
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
