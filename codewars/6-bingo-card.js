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

// Code credit: MDN
function randomIntInclusive(min, max) {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCard() {
  const bingoCard = [];
  let b;
  let i;
  let n;
  let g;
  let o;

  // 26 - 5 = 21
  while (bingoCard.length < 21) {
    b = randomIntInclusive(1, 15);
    bingoCard.push(`B${b}`);

    i = randomIntInclusive(16, 30);
    bingoCard.push(`I${i}`);

    n = randomIntInclusive(31, 45);
    if (bingoCard.length === 13) {
      // break; // free space
      bingoCard.push('free space');
    } else {
      bingoCard.push(`N${n}`);
    }

    g = randomIntInclusive(46, 60);
    bingoCard.push(`G${g}`);

    o = randomIntInclusive(61, 75);
    bingoCard.push(`O${o}`);
  }

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
WHILE LOOP

The problem with while loops, there are no indices. You're not iterating an array.

A while loop is similar to a for loop; the code in the block statement gets repeated over and over again. 

--------------------------------------------------------------------
RANDOM NUMBERS

Math.random()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

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

*/

/* =================================================================  
  TO DO
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/
