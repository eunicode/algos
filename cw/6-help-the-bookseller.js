/* =================================================================  
                          INSTRUCTIONS
================================================================= */

/*
Help the bookseller !
https://www.codewars.com/kata/54dc6f5a224c26032800005c

L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] 
First letter = category
Number = number of books

M = ["A", "B", "C", "W"]
Find how many books there are of each category

Output: "(A : 20) - (B : 114) - (C : 50) - (W : 0)"

--------------------------------------------------------------------
REQUIREMENTS
If there are no books of category A-Z, then count should be 0
If L or M are empty arrays, return ""

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

// listOfArt = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] 
// listOfCat = ["A", "B", "C", "W"]

function stockList(listOfArt, listOfCat) {
  // If either input array is empty, return empty string
  if (listOfArt.length === 0 || listOfCat.length === 0) {
    return '';
  }

  // Create 2D array [[ABART, 20]]
  const twoD = [];

  for (let i = 0; i < listOfArt.length; i++) {
    const pair = listOfArt[i].split(' ');
    twoD.push(pair); // O(N) time
  }

  console.log({ twoD });

  // Create object with key-value pairs
  const obj = {};

  for (let i = 0; i < twoD.length; i++) {
    // key
    const first = twoD[i][0][0];
    // value
    const num = Number.parseInt(twoD[i][1]);

    // If key exists in object, increment value
    if (first in obj) {
      obj[first] = obj[first] + num;
    } 
    // If key doesn't exist, add key-value pair
    else {
      obj[first] = num;
    }
  }

  console.log(obj);

  // Create final string by searching object and getting value of key.
  // If key doesn't exist, the count is 0

  let finalStr = '';

  for (let i = 0; i < listOfCat.length; i++) {
    let pair = '';

    // For the last category, there is no dash at the end
    if (i === listOfCat.length - 1) {
      pair = `(${listOfCat[i]} : ${obj[listOfCat[i]] ? obj[listOfCat[i]] : 0})`;
      finalStr += pair;
    } else {
      pair = `(${listOfCat[i]} : ${
        obj[listOfCat[i]] ? obj[listOfCat[i]] : 0
      }) - `;
      finalStr += pair;
    }
  }

  console.log({ finalStr });
  return finalStr;
}

/* =================================================================  
                          TESTS
================================================================= */

/* eslint-enable */

console.log(
  stockList(
    ['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'],
    ['A', 'B']
  )
); // "(A : 200) - (B : 1140)"

console.log(
  stockList(
    ['CBART 20', 'CDXEF 50', 'BKWRK 25', 'BTSQZ 89', 'DRTYM 60'],
    ['A', 'B', 'C', 'W']
  )
); // "(A : 0) - (B : 114) - (C : 70) - (W : 0)"

/* =================================================================  
                          NOTES
================================================================= */

/*
NOTES
We don't know how long the string will be. 
We don't know how long the number will be. 
If we iterate the array, and then iterate the string, it will O(N^2)
An easy way out is to use split(), which will split the string at the space.

REVIEW

str.split(separator) // ['ABART', 20]

key in object // Boolean

ternary operator
`(${listOfCat[i]} : ${obj[listOfCat[i]] ? obj[listOfCat[i]] : 0})`
If the key exist in the object, then the expression is the key's value.
If the key doesn't exist in the object, then expression is 0.
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
