/* =================================================================  
                          INSTRUCTIONS
================================================================= */

/*
557. Reverse Words in a String III
https://leetcode.com/problems/reverse-words-in-a-string-iii/

Introduction to Data Structure > Array and String

tags: easy, string

INSTRUCTIONS
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

--------------------------------------------------------------------
REQUIREMENTS

--------------------------------------------------------------------
ASSURANCES
In the string, each word is separated by single space and there will not be any extra space in the string.

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

var reverseWords = function(s) {  // "Let's take LeetCode contest"
  const reversedStr = reverse(s); // "tsetnoc edoCteeL ekat s'teL"
  const reversedArr = split(reversedStr); // ['tsetnoc', 'edoCteeL', 'ekat', 's\'teL']
  const arr = reverseElms(reversedArr); // ['s'teL', 'ekat', 'edoCteeL', 'tsetnoc']
  const finalStr = join(arr); // "s'teL ekat edoCteeL tsetnoc"
  return finalStr;
};

// Reverse entire string
function reverse(str) { // "Let's take LeetCode contest"
  let rStr = "";
  
  // Iterate string backwards and build new string
  for (let i = str.length - 1; i >= 0; i--) {
    rStr += str[i];
  }
  
  console.log({ rStr });
  return rStr; // "tsetnoc edoCteeL ekat s'teL"
}

// Split string into array of words
function split(str) { // "tsetnoc edoCteeL ekat s'teL"
  let arr = [];
  let word = "";
  
  for (let i = 0; i < str.length; i++) {
    // If we hit a space, push the built word, and reset `word`, and skip to next iteration
    if (str[i] === " ") {
      arr.push(word);
      word = "";
      continue;
    }
    
    // If elm is not a space, build word
    word += str[i];
    
    // If we reach end of string, push the built word
    if (i === str.length - 1) {
      arr.push(word);
    }
  }
  
  console.log({ arr })
  return arr; // ['tsetnoc', 'edoCteeL', 'ekat', 's'teL']
}

// Reverse order of words in array
function reverseElms(arr) { // ['tsetnoc', 'edoCteeL', 'ekat', 's'teL']
  const flippedArr = [];
  
  for (let i = arr.length - 1; i >= 0; i--) {
    flippedArr.push(arr[i]);
  }
  
  console.log({ flippedArr });
  return flippedArr; // ['s'teL', 'ekat', 'edoCteeL', 'tsetnoc']
}

// Join words into a new string
function join(arr) { // [ 's'teL', 'ekat', 'edoCteeL', 'tsetnoc' ]
  let str = "";
  
  for (let i = 0; i < arr.length; i++) {
    // If we hit of end of string, don't concatenate space 
    if (i === arr.length - 1) {
      str += arr[i];
    } else {
      str = str + arr[i] + " ";
    }
  }
  
  console.log({ str })
  return str; // "s'teL ekat edoCteeL tsetnoc"
}

/* =================================================================  
                          TESTS
================================================================= */

/* eslint-enable */

console.log(reverseWords("Let's take LeetCode contest"));

/* =================================================================  
                          NOTES
================================================================= */

/*
In Java, strings are immutable, so string concatenation is expensive time-wise.
So string concatenation in JS is also probably slow. 
So convert string to character array. 
 */

/* =================================================================  
                          TO DO
================================================================= */

/*
Optimize memory usage
Solve with mirror reverse function (two-pointer technique)
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
