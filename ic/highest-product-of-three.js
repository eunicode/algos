/* =================================================================  
                          INSTRUCTIONS
================================================================= */

/*
Given an array of integers, find the highest product you can get from three of the integers.

The input `arrayOfInts` will always have at least three integers.

TAGS: GREEDY_, GREEDY-ALGOS

EDGE CASES
Input array has
0 negatives
1 negative
2 negatives
3 negatives
All negatives
0 elements
1 element
2 elements

INCOMPLETE
 */

/* =================================================================  
                          CODE
================================================================= */

/* eslint-disable */

// Brute force
/*
Find all possible combinations of sets of 3 (3-combination/3-subset). 
Use triply nested for loops. 
Have a variable store the highest product. That way you don't have to worry about negatives.
[1, -2, 3, -4, 5, -6]
 */

function highestProductOf3N(arrayOfInts) {
  if (arrayOfInts.length < 3) {
    throw new Error('Need at least three numbers')
  }

  // Initialize `product` with first 3 numbers
  let product = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
  
  // Fix first number
  for (let i = 0; i < arrayOfInts.length - 2; i++) {
    // Fix second number
    for (let j = i + 1; j < arrayOfInts.length - 1; j++) {
      // Fix third number
      for (let k = j + 1; k < arrayOfInts.length; k++) {
        let temp = arrayOfInts[i] * arrayOfInts[j] * arrayOfInts[k];

        // If the new product is higher than the old product, replace the value 
        if (temp > product) {
          product = temp
        }

        // console.log(`${arrayOfInts[i]},${arrayOfInts[j]},${arrayOfInts[k]}`)
      }
    }
  }
  
  return product
}

/* -------------------------------------------------------------- */
/* */

function highestProductOf3(arrayOfInts) {
}

/* =================================================================  
                          TESTS
================================================================= */

/* eslint-enable */

let desc = 'short array';
let actual = highestProductOf3([1, 2, 3, 4]);
let expected = 24;
assertEqual(actual, expected, desc);

desc = 'longer array';
actual = highestProductOf3([6, 1, 3, 5, 7, 8, 2]);
expected = 336;
assertEqual(actual, expected, desc);

desc = 'array has one negative';
actual = highestProductOf3([-5, 4, 8, 2, 3]);
expected = 96;
assertEqual(actual, expected, desc);

desc = 'array has two negatives';
actual = highestProductOf3([-10, 1, 3, 2, -10]);
expected = 300;
assertEqual(actual, expected, desc);

desc = 'array is all negatives';
actual = highestProductOf3([-5, -1, -3, -2]);
expected = -6;
assertEqual(actual, expected, desc);

desc = 'error with empty array';
const emptyArray = () => highestProductOf3([]);
assertThrowsError(emptyArray, desc);

desc = 'error with one number';
const oneNumber = () => highestProductOf3([1]);
assertThrowsError(oneNumber, desc);

desc = 'error with two numbers';
const twoNumber = () => highestProductOf3([1, 1]);
assertThrowsError(twoNumber, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}

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
                          DIVIDERS
================================================================= */

/*
--------------------------------------------------------------------
*/

/* -------------------------------------------------------------- */

/* ================================================================= */
