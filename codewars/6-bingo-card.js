/* =================================================================  
  INSTRUCTIONS
================================================================= */

/* 
Bingo Card
https://www.codewars.com/kata/bingo-card/train/javascript

Tags: ALGORITHMS, GAMES, OBJECT-ORIENTED PROGRAMMING

A Bingo card contains 24 unique and random numbers according to this scheme:
- 5 numbers from the B column in the range 1 to 15
- 5 numbers from the I column in the range 16 to 30
- 4 numbers from the N column in the range 31 to 45
- 5 numbers from the G column in the range 46 to 60
- 5 numbers from the O column in the range 61 to 75

The card must be returned as an array of Bingo style numbers:
{ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... }

The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.

MY NOTES: 
The numbers must be unique!
There is a free space in the center!
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

// Helper function - Generate random number between two values, inclusive
// Code credit: MDN
function randomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // The `+ 1` makes the max inclusive
}

function getCard() {
  const bingoCard = [];
  
  // Store strings outside of while loop
  let bNum = '';
  let iNum = '';
  let nNum = '';
  let gNum = '';
  let oNum = '';

  while (bingoCard.length < 5) {
    // Create letter-num string
    bNum = `B${randomIntInclusive(1, 15)}`;

    // If the array does not contain the letter-num string, push the letter-num string.
    if (!bingoCard.includes(bNum)) {
      bingoCard.push(bNum);
    }
  }

  while (bingoCard.length < 10) {
    iNum = `I${randomIntInclusive(16, 30)}`;

    if (!bingoCard.includes(iNum)) {
      bingoCard.push(iNum);
    }
  }

  while (bingoCard.length < 15) {
    nNum = `N${randomIntInclusive(31, 45)}`;

    // Insert a free-space placeholder at index 13
    if (bingoCard.length === 12) {
      bingoCard.push('free-space');
    }

    if (!bingoCard.includes(nNum)) {
      bingoCard.push(nNum);
    }
  }

  while (bingoCard.length < 20) {
    gNum = `G${randomIntInclusive(46, 60)}`;

    if (!bingoCard.includes(gNum)) {
      bingoCard.push(gNum);
    }
  }

  while (bingoCard.length < 25) {
    oNum = `O${randomIntInclusive(61, 75)}`;

    if (!bingoCard.includes(oNum)) {
      bingoCard.push(oNum);
    }
  }

  // Remove 'free-space' placeholder
  bingoCard.splice(12, 1);

  return bingoCard;
}

/* =================================================================  
  TESTS
================================================================= */

console.log(getCard());

/* =================================================================  
  NOTES
================================================================= */

/* 
OBSERVATIONS

We have to return an array in the format B,B,B,B,B,I,I,I, etc. 
Not B,I,N,G,O,B,I,N,G,O,etc

--------------------------------------------------------------------
WHILE LOOP

The problem with while loops, there are no indices. You're not iterating an array.

A while loop is similar to a for loop; the code in the block statement gets repeated over and over again. 

--------------------------------------------------------------------
RANDOM NUMBERS

Math.random()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

Return value
A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).

Math.floor()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

Returns the largest integer less than or equal to a given number.
<=
Math.floor(7.96); // 7
Math.floor(7.04); // 7
Math.floor(7); // 7
Math.floor(-7.04); // -8

Math.ceil()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil

Returns smallest integer greater than or equal to a given number.
>=
Math.ceil(7.96); // 8
Math.ceil(7.04); // 8
Math.ceil(7); // 7
Math.ceil(-7.04); // -7

Generating random whole numbers in JavaScript in a specific range?
https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

--------------------------------------------------------------------
HOW TO CHECK IF AN ELEMENT EXISTS IN ARRAY

indexOf()

includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

*/

/* =================================================================  
  TO DO
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/
