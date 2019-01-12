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

var intersect = function(nums1, nums2) {
  // Label the smaller array `small`, and the bigger array `big`
  const nums1L = nums1.length;
  const nums2L = nums2.length;
  
  let small = [...nums1];
  let big = [...nums2];
  
  if (nums1L > nums2L) {
      small = [...nums2];
      big = [...nums1];
  } 
  
  // Store a collection of all possible combinations in array `big`
  const bigCombos = [];
  // [1,2,2,1] and [2,2]
  // [4,9,5] and [9,4,9,8,4]

  for (let i = 0; i < big.length; i++) {
      for (let j = 0; j < big.length; j++) {
          bigCombos.push(big.slice(i, j + 1)); // slice() ends extraction BEFORE endIndex
      }
  }
  
  // console.log(bigCombos);

  // Get rid of empty arrays 
  const bigCombosFiltered = bigCombos.filter( (elm) => {
      if (elm.length === 0) {
          return false
      }
      return true;
  });
  
  console.log(bigCombosFiltered);
  
  // Store a collection of all possible combinations in array `small`

  const smallCombos = [];
  
  for (let i = 0; i < small.length; i++) {
      for (let j = 0; j < small.length; j++) {
          smallCombos.push(small.slice(i, j + 1));
      }
  }
  
  // console.log(smallCombos);

  // Get rid of empty arrays
  const smallCombosFiltered = smallCombos.filter( elm => {
      if (elm.length === 0) {
          return false;
      }
      return true;
  });
  
  console.log(smallCombosFiltered);
  
  // Store all arrays that exist in both bigCombosFiltered and smallCombosFiltered
  const matches = [];
  
  for (let i = 0; i < smallCombosFiltered.length; i++) {
      for (let j = 0; j < bigCombosFiltered.length; j++) {
          const test = compareArrays(smallCombosFiltered[i], bigCombosFiltered[j]);
          
          if (test === true) {
              matches.push(smallCombosFiltered[i]);
          }
      }
  }
  
  console.log(matches); // [ [ 2 ], [ 2 ], [ 2, 2 ], [ 2 ], [ 2 ] ]
  
  // Find the longest match
  if (matches.length > 1) {   
      const biggestArr = matches.reduce( (acc, curr) => {
          if (curr.length > acc.length) {
              acc = [...curr];
              return acc;
          } else {
              return acc;
          }
          // Missing, what if the lengths are equal?
      })
      return biggestArr;
  }
  
  // If there's only one match, return it
  if (matches.length === 1) {
      return matches[0];
  } 
  
  // If there are no matches, return empty array
  return [];
};

// Helper function
function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
      return false;
  }
  
  // Turn array into a string so you can compare them
  const str1 = arr1.reduce( (acc, curr) => {
      return `${acc}${curr}`
  });
  
  const str2 = arr2.reduce( (acc, curr) => {
      return `${acc}${curr}`
  });
  
  if (str1 === str2) {
      return true;
  }
  
  return false;
}

/* =================================================================  
  TESTS
================================================================= */

// console.log(intersect([1,2,2,1], [2,2])); // [2,2]

// console.log(intersect([4,9,5], [9,4,9,8,4])); // [4,9]

// console.log(intersect([1], [1])); // [1]

// console.log(intersect([], [])); // []

// console.log(intersect([2,1], [1,2])); // [1, 2]

console.log(intersect([9,8,3,6,9], [9,8,6,9])); // Two matches of equal length

/* =================================================================  
  NOTES
================================================================= */

/*
LESSONS LEARNED

- We can't use Set to get rid of duplicate arrays. Arrays are objects, objects have references, and therefore unique.

- Make sure the for loop's condition eventually evaluates to false, or memory will be exceeded. 
For example: 
for (let j = 0; j < big.length; i++) {...}
We never increment `j`, so the block code will run forever, and `i` will keep incrementing. 

- slice() ends extraction BEFORE endIndex

 */

/* =================================================================  
  TO DO
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/
