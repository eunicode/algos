/* =================================================================  
                          INSTRUCTIONS
================================================================= */

/*
14. Longest Common Prefix
https://leetcode.com/problems/longest-common-prefix/

Intro to Data Structure: Array and String

Tags: easy, string

--------------------------------------------------------------------
REQUIREMENTS

--------------------------------------------------------------------
ASSURANCES

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

let longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return '';
  }

  let longestStr = '';

  // iterate letters in first word
  for (let i = 0; i < strs[0].length; i++) {
    let allcheck = 1;

    // iterate words in array
    for (let j = 1; j < strs.length; j++) {
      // console.log('strs[j][i]: ', strs[j][i])
      if (strs[j][i] === strs[0][i]) {
        // console.log({ allcheck })
        allcheck += 1;
      }
    }

    if (allcheck === strs.length) {
      longestStr += strs[0][i];
    } else {
      break; // This is necessary to stop concatenating to the accumulator string. We need the longest CONSECUTIVE string
    }
  }

  return longestStr;
};

/* =================================================================  
                          TESTS
================================================================= */

console.log(longestCommonPrefix(["flower","flow","flight"])); // fl

// EDGE CASES
console.log(longestCommonPrefix([]));
// if we have an empty array, we can't do strs[0].length;

console.log(longestCommonPrefix(["aca", "cba"]));
// Returns "a" if you only check if the strings have matching letters at matching indices, instead of checking for longest consecutive substring.

console.log(longestCommonPrefix([""]))

/* =================================================================  
                          NOTES
================================================================= */

/*
LESSONS
Make sure you use comparison operator in `if` condition, not assignment operator

We're being asked for the longest prefix
That means consecutive!! 

Input edge cases
Empty array

Nested for loops quirk
Outer for loop: iterate letters in first word. 
The `i` variable is the pointer for the index of the current letter.
Inner for loop: iterate words in array.
The `j` variable is the pointer for the word in the array. 
[fly, flow, flower]
fly[0] = flow[0] = flower[0]
fly[1] = flow[1] = flower[1]

Nested for loops
We need two variables to target element in sub-array
arr[i][j]
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
