/* =================================================================  
                          INSTRUCTIONS
================================================================= */

/*
INSTRUCTIONS
You've built an inflight entertainment system with on-demand movie streaming.

Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

When building your function:
- Assume your users will watch exactly two movies
- Don't make your users watch the same movie twice
- Optimize for runtime over memory

Determine if two movie runtimes add up to the flight length

TAGS: HASHTABLE, HASH TABLE, HASH-TABLE

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

// SOLUTION: O(N^2) TIME COMPLEXITY
/*
param1 = [1,2,3,4] 
param2 = 5

Find all combinations of sets with a cardinality of 2, with a nested for loop
*/

// function canTwoMoviesFillFlight(movieLengths, flightLength) {
//   for (let i = 0; i < movieLengths.length; i++) {
//     let firstmovie = movieLengths[i];
    
//     // Starting j at `i+1` reduces the number of permutations. 
//     // It skips duplicate pairs
//     for (let j = i + 1; j < movieLengths.length; j++) {
//       let secondmovie = movieLengths[j];
      
//       if (firstmovie + secondmovie === flightLength) {
//         return true;
//       }
//     }
    
//   }

//   return false;
// }

/* -------------------------------------------------------------- */
// SOLUTION: O(N) W/ PLAIN OBJECT
/* Search for movie1's complement, movie2. 
If it doesn't exist, add movie1 to the hash table.
If it does exist, then you have movie1 and movie2. You can return true.
This works bc you add movie1 to the hash table, so when you hit movie2 in the array,
you will find movie2's complement, movie1. 
 */

// function canTwoMoviesFillFlight(movieLengths, flightLength) {
//   let hash = {};

//   for (let i = 0; i < movieLengths.length; i++) {
//     let first = movieLengths[i];
//     let second = flightLength - movieLengths[i];
    
//     if (hash[second]) {
//       // console.log(hash)
//       return true;
//     } else {
//       hash[first] = 'placeholder'
//     }
//   }

//   // console.log(hash)
//   return false;
// }

// SOLUTION: O(N) W/ SET
function canTwoMoviesFillFlight(movieLengths, flightLength) {
  let store = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    let movie1 = movieLengths[i];
    let movie2 = flightLength - movie1;

    if (store.has(movie2)) {
      return true;
    } else {
      store.add(movie1)
    }
  }
 
  return false;
}


/* =================================================================  
                          TESTS
================================================================= */

/* eslint-enable */

// let desc = 'short flight';
console.log(canTwoMoviesFillFlight([2, 4], 1));
// expected = false;

// desc = 'long flight';
console.log(canTwoMoviesFillFlight([2, 4], 6));
// expected = true;

// desc = 'one movie half flight length';
console.log(canTwoMoviesFillFlight([3, 8], 6));
// expected = false;

// desc = 'two movies half flight length';
console.log(canTwoMoviesFillFlight([3, 8, 3], 6));
// expected = true;

// desc = 'lots of possible pairs';
console.log(canTwoMoviesFillFlight([1, 2, 3, 4, 5, 6], 7));
// expected = true;

// desc = 'not using first movie';
console.log(canTwoMoviesFillFlight([4, 3, 2], 5));
// expected = true;

// desc = 'only one movie';
console.log(canTwoMoviesFillFlight([6], 6));
// expected = false;

// desc = 'no movies';
console.log(canTwoMoviesFillFlight([], 2));
// expected = false;

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
