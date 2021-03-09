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

// SOLUTION #2 - HASH TABLE

// const twoSum = function(numbers, target) {
//   // Create map object
//   const hmap = new Map();
//   let remainder;

//   // Add key-value pairs to map: key = number, value = index
//   for (let i = 0; i < numbers.length; i++) {
//     hmap.set(numbers[i], i);
//   }

//   // Check to see if current value's complement exists in map
//   for (let i = 0; i < numbers.length; i++) {
//     // remainder = target - current
//     remainder = target - numbers[i];

//     if (hmap.has(remainder)) {
//       return [i + 1, hmap.get(remainder) + 1];
//     }
//   }

//   return [];
// };

/* -------------------------------------------------------------- */

// SOLUTION #3 - TWO POINTER
const twoSum = function(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;
  let sum; // let sum = undefined
  let maxCount = 0; // Use this to limit the number of times the while loop is run.
  // The maximum number of steps it takes to reach the target is length - 1.
  // That's when the target is the middle two numbers.

  // [2,7,11,15] 18
  while (sum !== target && maxCount < numbers.length) {
    sum = numbers[start] + numbers[end];

    if (sum > target) {
      // If sum is greater, move `end` pointer to the left
      end -= 1;
    } else if (sum < target) {
      // If sum is less, move `start` pointer to the right
      start += 1;
    } else {
      // If sum = target, stop
      return [start + 1, end + 1];
    }

    maxCount += 1;
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

// EDGE CASE
console.log(twoSum([0, 0, 3, 4], 0)); // [1, 2]

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

--------------------------------------------------------------------
TWO POINTER

I initialized `sum` like so: let sum = 0
And this was my while loop condition: sum !== target
Therefore I failed the test when `target` was 0. 
[0,0,3,4] // [1,2]

The condition for the while loop can be: left < right (or right > left)
The last combination will be the middle two numbers.
Our left pointer must always be before the right pointer. 
It can't point at the same place as or beyond the right pointer. 
Whether we're moving our start pointer right (incrementing left pointer), 
or moving our end pointer left (decrementing right pointer), 
start pointer must always be before end pointer. 
When left < right is no longer true, that's when we must stop moving our pointers.
LEFT
0+3, 1+3, 2+3
RIGHT
0+3, 0+2, 0+1

For example, let's imagine target number does not exist. 
[2,7,11,15] target = 20
2+15 // too small, so move `start`
7+15 // too big, so move `end` 
7+11 // too small, so move `start`
11+11 // this is invalid

--------------------------------------------------------------------
RANDOM

addition assignment operator is +=, not =+
`else` doesn't have condition
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
