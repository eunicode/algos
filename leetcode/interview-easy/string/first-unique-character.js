/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
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
  
  for (let letter of arr) {
    if (mapp.has(letter)) {
      mapp.set(letter, 2);
    } else {
      mapp.set(letter, 1);
    }
  }
  
  for (let [letter, count] of mapp) {
    if (count === 1) {
      return arr.indexOf(letter);
    }
  }
  
  return -1;
};

// Runtime: faster than 35.12% of JS submissions
// Memory usage: less than 6.45% of JS submissions

/* =================================================================  
  TESTS
================================================================= */

/* =================================================================  
  NOTES
================================================================= */

/*
 */

/* =================================================================  
  TO DO
================================================================= */

/*
Does indexOf() have O(N) time complexity? 
Can I use another method instead of indexOf()?
 */

/*
--------------------------------------------------------------------
*/
