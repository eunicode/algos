/* =================================================================  
                          INSTRUCTIONS
================================================================= */

/*
INSTRUCTIONS
Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. 

You can assume the input string only contains lowercase letters.

Examples:
"civic" should return true
"ivicc" should return true
"civil" should return false

Check if any permutation of the input is a palindrome

TAGS: HASHTABLE, HASH-TABLE, hashtable_

--------------------------------------------------------------------
REQUIREMENTS

--------------------------------------------------------------------
GIVEN / ASSURANCES

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

// SOLUTION #1: TWO FOR LOOPS
// Iterate string and add chars and their counts to the hash table.
// Iterate hash table, and find all the chars with odd counts

function hasPalindromePermutationN(theString) {
  // Create object to store characters, and their counts
  let store = {};
  
  // If the char exists in the store, increment count
  // If not, add char to the store
  for (let i = 0; i < theString.length; i++) {
    let currChar = theString[i]
    
    if (store[currChar]) {
      store[currChar] = store[currChar] + 1
    } else {
      store[currChar] = 1
    }
  }
  
  let odd = 0;
  
  // Increment `odd` variable whenever there's a key with an odd value 
  for (const [key, value] of Object.entries(store)) {
    if (value % 2 !== 0) {
      odd += 1
    } 
  }
  
  // If there are no chars w/ odd count, or if there is one char w/ odd count,
  // the string has a palindrome
  if (odd === 0 || odd === 1 ) {
    return true;
  }
  
  return false;
}

/* -------------------------------------------------------------- */
// SOLUTION #2 - SINGLE PASS 
/* The key here is that, for a palindrome, 
every, or n-1, char appears an even number of times
and 0, or 1, char can appear an odd number of times
That means every, or n-1, char will be a pair. 
We can add a char to a dict, and remove it.
If a char remains after adding and removing it, it appears an odd number of times. 
So at the end, if the dict has 0 or 1 char, the string is a palindrome. 
 */

const hasPalindromePermutation = (theString) => {
  let store = new Set();

  for (let i = 0; i < theString.length; i++) {
    let char = theString[i];

    if (store.has(char)) {
      store.delete(char)
    } else {
      store.add(char)
    }
  }

  if (store.size === 0 || store.size === 1) {
    return true;
  } else {
    return false;
  }
}

/* =================================================================  
                          TESTS
================================================================= */

/* eslint-enable */

// let desc = 'permutation with odd number of chars';
console.log(hasPalindromePermutation('aabcbcd'));
// true

// desc = 'permutation with even number of chars';
console.log(hasPalindromePermutation('aabccbdd'));
// true

// desc = 'no permutation with odd number of chars';
console.log(hasPalindromePermutation('aabcd'));
// false

// desc = 'no permutation with even number of chars';
console.log(hasPalindromePermutation('aabbcd'));
// false

// desc = 'empty string';
console.log(hasPalindromePermutation(''));
// true

// desc = 'one character string ';
console.log(hasPalindromePermutation('a'));
// true

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

/* =================================================================  
                          SOLUTIONS
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/

/* -------------------------------------------------------------- */
