/* =================================================================  
                          INSTRUCTIONS
================================================================= */

/*
https://www.interviewcake.com/question/javascript/product-of-other-numbers?course=fc1&section=greedy

TAGS: GREEDY_
 */

/* =================================================================  
                              CODE
================================================================= */

/* eslint-disable */

/* 
SOLUTION - BRUTE FORCE

Create variable to hold array of products
Outer for loop to iterate elements in array.  
- `i` will represent current index
- Create variable to hold product 
  Inner for loop to iterate elements in array
    - Use if block to exclude current index
    - Multiply all elements
  Push product to array

  GOTCHAS: Edge case #2 - Input array has one number
bc I have this line, `let prod = 1;`, if I only have one number in given array, 
I will push 1 to productArray, and return [1]. 
Also, the goal of this function is to get product of all numbers except current index. If you have one number, that is the current index.
*/

function getProductsOfAllIntsExceptAtIndexB(intArray) {
  const prodArray = [];

  if (intArray.length === 0) {
    throw new Error('Length is 0');
  }

  if (intArray.length === 1) {
    throw new Error('Length is 1');
  }

  for (let i = 0; i < intArray.length; i++) {
    let prod = 1;

    for (let j = 0; j < intArray.length; j++) {
      if (j !== i) {
        prod *= intArray[j];
      }
    }

    prodArray.push(prod);
  }

  return prodArray;
}

/* -------------------------------------------------------------- */
/* SOLUTION - GREEDY, MY VERSION
[6,7,8,9]

Create a variable to hold array of products, initialize to [1]
Create a variable to hold `beforeProduct` (products of numbers before current index), initialize to 1
Create a variable to hold `afterProduct` (products of numbers after current index), initialize to 1

BEFORE PRODUCT
For loop
Snowball `beforeProduct` from first elm to second-to-last elm of array.  
Push `beforeProduct` to final array
1       idx 0 // represents number before first elm
6       idx 1
67      idx 2
678     idx 3

AFTER PRODUCT
For loop
In order to snowball from last elm in array, start from end and decrement until you reach second elm in array. 
Multiply `afterProduct` to corresponding numbers in final array
789     idx 1 -> multiply w/ final[0]
89      idx 2 -> multiply w/ final[1]
9       idx 3 -> multiply w/ final[2]

*/

function getProductsOfAllIntsExceptAtIndex1(intArray) {
  const final = [1];
  let beforeProduct = 1;
  let afterProduct = 1;

  if (intArray.length === 0 || intArray.length === 1) {
    throw new Error(
      "Can't have product of numbers except at current index with less than numbers"
    );
  }

  for (let i = 0; i < intArray.length - 1; i++) {
    beforeProduct *= intArray[i];
    final.push(beforeProduct);
  }

  for (let i = intArray.length - 1; i > 0; i--) {
    afterProduct *= intArray[i];
    final[i - 1] *= afterProduct;
  }

  return final;
}

/* -------------------------------------------------------------- */
/* SOLUTION - GREEDY, IC
 */

function getProductsOfAllIntsExceptAtIndex(intArray) {
  if (intArray.length < 2) {
    throw new Error(
      'Getting the product of numbers at other indices requires at least 2 numbers'
    );
  }

  const productsOfAllIntsExceptAtIndex = [];

  // For each integer, we find the product of all the integers
  // before it, storing the total product so far each time
  let productSoFar = 1;
  for (let i = 0; i < intArray.length; i++) {
    productsOfAllIntsExceptAtIndex[i] = productSoFar;
    productSoFar *= intArray[i];
  }

  // For each integer, we find the product of all the integers
  // after it. since each index in products already has the
  // product of all the integers before it, now we're storing
  // the total product of all other integers
  productSoFar = 1;
  for (let j = intArray.length - 1; j >= 0; j--) {
    productsOfAllIntsExceptAtIndex[j] *= productSoFar;
    productSoFar *= intArray[j];
  }

  return productsOfAllIntsExceptAtIndex;
}

/* =================================================================  
                              TESTS
================================================================= */

/* eslint-enabl e */

let desc = 'short array';
let actual = getProductsOfAllIntsExceptAtIndex([1, 2, 3]);
let expected = [6, 3, 2];
assertArrayEquals(actual, expected, desc);

(desc = 'longer array'),
  (actual = getProductsOfAllIntsExceptAtIndex([8, 2, 4, 3, 1, 5]));
expected = [120, 480, 240, 320, 960, 192];
assertArrayEquals(actual, expected, desc);

(desc = 'array has one zero'),
  (actual = getProductsOfAllIntsExceptAtIndex([6, 2, 0, 3]));
expected = [0, 0, 36, 0];
assertArrayEquals(actual, expected, desc);

desc = 'array has two zeros';
actual = getProductsOfAllIntsExceptAtIndex([4, 0, 9, 1, 0]);
expected = [0, 0, 0, 0, 0];
assertArrayEquals(actual, expected, desc);

desc = 'one negative number';
actual = getProductsOfAllIntsExceptAtIndex([-3, 8, 4]);
expected = [32, -12, -24];
assertArrayEquals(actual, expected, desc);

desc = 'all negative numbers';
actual = getProductsOfAllIntsExceptAtIndex([-7, -1, -4, -2]);
expected = [-8, -56, -14, -28];
assertArrayEquals(actual, expected, desc);

desc = 'error with empty array';
const emptyArray = () => getProductsOfAllIntsExceptAtIndex([]);
assertThrowsError(emptyArray, desc);

desc = 'error with one number';
const oneNumber = () => getProductsOfAllIntsExceptAtIndex([1]);
assertThrowsError(oneNumber, desc);

function assertArrayEquals(a, b, desc) {
  const arrayA = JSON.stringify(a);
  const arrayB = JSON.stringify(b);
  if (arrayA !== arrayB) {
    console.log(`${desc} ... FAIL: ${arrayA} != ${arrayB}`);
  } else {
    console.log(`${desc} ... PASS`);
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
LESSONS FROM "SOLUTION - GREEDY, IC"

1. Do `if (arr.length < 2)`
instead of `if (arr.length === 0 || arr.length === 1)`

2. Do `final[i] = productSoFar`
instead of `final.push(productSoFar)`

3. Improve index tracking and matching 

FIRST HALF 
1       idx 0
6       idx 1
67      idx 2
678     idx 3 

SECOND HALF
1       idx 3 -> match w/ final[3]
9       idx 2 -> match w/ final[2]
89      idx 1 -> match w/ final[1]
789     idx 0 -> match w/ final[0]

[1, 6, 67, 678]
[789, 89, 9, 1]

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
