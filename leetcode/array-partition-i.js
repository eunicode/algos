/* =================================================================  
                          INSTRUCTIONS
================================================================= */

/*
561. Array Partition I
https://leetcode.com/problems/array-partition-i/

Intro to Data Structure: Array and String

Group elements into pair such that the sum of the minimum of all pairs is as 
large as possible. 

GIVEN
n is a positive integer, which is in the range of [1, 10000].
All the integers in the array will be in the range of [-10000, 10000].

Tags: easy, array, two-pointer technique
Sort

--------------------------------------------------------------------
REQUIREMENTS

Return maximum sum

--------------------------------------------------------------------
ASSURANCES
Array will have even number of elements
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
let arrayPairSum = function(nums) {
  bubbleSort(nums);

  let sum = 0;

  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }

  return sum;
};

function bubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  console.log({ arr });
}

/* =================================================================  
                          TESTS
================================================================= */

console.log(arrayPairSum([1,4,3,2])); // 4
// Explantion: min(1,2) + min(3,4) = 1 + 3 = 4

/* =================================================================  
                          NOTES
================================================================= */

/*
BUBBLE SORT
We can use nested for loops even though our input isn't a 2D array. 
If we have an array [4,3,2,1]
We want the outer loop to be done 3 times
We want the inner loop to be done 3 times

The outer loop is repeating the whole swapping process (the inner loop)
The inner loop is swapping 0&1, 1&2, 2&3

A1 = [4,3,2,1] to [3,4,2,1]
A2 = [3,4,2,1] to [3,2,4,1]
A3 = [3,2,4,1] to [3,2,1,4]

B1 = [3,2,1,4] to [2,3,1,4]
B2 = [2,3,1,4] to [2,1,3,4]
B3 = [2,1,3,4] to [2,1,3,4]

C1 = [2,1,3,4] to [1,2,3,4]
C2 = ditto
C3 = ditto

 */

/* =================================================================  
                          TO DO
================================================================= */

/*
Improve Bubble Sort algo by using a do while loop
Use a sorting algo with better time complexity
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
