/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
Maximum subarray sum
https://www.codewars.com/kata/maximum-subarray-sum/train/javascript

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array, or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers, and the maximum sum is the sum of the whole array. 
If the list is made up of only negative numbers, return 0 instead.
Empty list is considered to have zero greatest sum. 

Note that the empty list or array is also a valid sublist/subarray.
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

/*
Cases
- Empty array, return 0
- All negative nums, return 0
- All positive, return sum of all numbers
- Mix of negative and positive numbers
*/

var maxSequence = function(arr) {
  // If array is empty
  if (arr.length === 0) {
    return 0;
  }
  
  const allNeg = arr.every( (elm) => elm < 0 );
    
  const allPos = arr.every( (elm) => elm >= 0 );
  
  // If array has all negative numbers
  if (allNeg === true) {
    return 0;
  }
  
  // If array has all positive numbers
  if (allPos === true) {
    const red = arr.reduce( (acc, curr) => acc + curr, 0 );
    console.log({ red });
    return red;
  }
  
  let sum = 0; 
  let contiguous = [];

  for (let i = 0; i < arr.length; i++) {
    // let start = 0;

    // for (let j = i; j < arr.length; j++) {
    //   arr[j] + arr
    // }
    
    j = i;

    while (j < arr.length) {
      sum = arr[i] + 
    }
  }
  
}

/* =================================================================  
  TESTS
================================================================= */

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// should be 6: [4, -1, 2, 1]

/* =================================================================  
  NOTES
================================================================= */

/*
QUESTIONS
Is 0 positive or negative?
positive = greater than 0
negative = less than 0
0 = neither positive nor negative

How do I implement `reduce` from scratch? 

0
0 + 1
0 + 1 + 2
0 + 1 + 2 + 3

1
1 + 2
1 + 2 + 3

2
2 + 3

3

How do I store the sequence of numbers for each summation?
Nvm, that's not required.
Only the maximum sum is required.

 */

/* =================================================================  
  TO DO
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/

/* -------------------------------------------------------------- */