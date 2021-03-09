/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
https://leetcode.com/problems/first-unique-character-in-a-string/
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

// SOLUTION #1 - NESTED FOR LOOPS - TIME LIMIT EXCEEDED

// var firstUniqChar = function(s) {
//   const arr = [...s];
//   let noUnique = 0;
  
//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
    
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j] && i !== j) {
//         count += 1;
//       }
//     }
    
//     if (count === 0) {
//       return i;
//     } 
//   }
  
//   return -1;
  
// };

/*
--------------------------------------------------------------------
*/

// SOLUTION #2 - MAP + INDEXOF

var firstUniqChar = function(s) {
  const mapp = new Map();
  
  const arr = [...s];
  
  // O(N)
  for (let letter of arr) {
    if (mapp.has(letter)) {
      mapp.set(letter, 2);
    } else {
      mapp.set(letter, 1);
    }
  }
  
  console.log({ mapp });

  // O(1) bc mapp will have at 26 keys (the number of letters in alphabet)
  for (let [letter, count] of mapp) {
    if (count === 1) {
      // O(N) bc we're searching an array
      // but it is not O(N^2) bc we will do this step zero times or once,
      // not N * N times.
      return arr.indexOf(letter);
    }
  }
  
  return -1;
};

/* =================================================================  
  TESTS
================================================================= */

// console.log(firstUniqChar('leetcode'));
// return 0

console.log(firstUniqChar('loveleetcode'));
// return 2

/* =================================================================  
  NOTES
================================================================= */

/*
 */

/* =================================================================  
  TO DO
================================================================= */

/*
Does indexOf() have O(N) time complexity? Yes
Can I use another method instead of indexOf()?
 */

/*
--------------------------------------------------------------------
*/
