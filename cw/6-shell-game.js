/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
The Shell Game
https://www.codewars.com/kata/546a3fea8a3502302a000cd2

"The Shell Game" involves three shells/cups/etc upturned on a playing surface, with a ball placed underneath one of them. 
The shells are then rapidly swapped round, and the game involves trying to track the swaps and, once they are complete, identifying the shell containing the ball.
This is usually a con, but you can assume this particular game is fair...

Your task is as follows. 
Given the shell that the ball starts under, and list of swaps, return the location of the ball at the end. 
All shells are indexed by the position they are in at the time.

For example, given the starting position 0 and the swap sequence [(0, 1), (1, 2), (1, 0)]:

- The first swap moves the ball from 0 to 1
- The second swap moves the ball from 1 to 2
- The final swap doesn't affect the position of the ball.

So

swaps = [[0,1], [1,2], [1, 0]]
find_the_ball(0, swaps) == 2

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

const find_the_ball = function(start, swaps) {
  // If there is no swapping, the ball is in the start position
  if (swaps.length === 0) {
    return start;
  }

  // Find the highest index of a cup
  const numOfCups = swaps.reduce((acc, curr) => {
    // `swaps` is a 2D array. Find the greatest number in the sub-array
    const greater = curr[0] > curr[1] ? curr[0] : curr[1];

    // Compare the greatest number in sub-array #1 and sub-array #2. Return the greater number. 
    return acc > greater ? acc : greater;
  }, 0);
  console.log({ numOfCups });

  // Generate an array with elements 1 - numOfCups
  // const record = ["A", "B", "C"];
  const record = [];
  for (let i = 0; i < numOfCups; i++) {
    record.push(i);
  }
  console.log({ record });
  // ES6 method
  // const recordES6 = [...new Array(numOfCups).keys()];
  // console.log({ recordES6 });

  // const ball = record[start]; // `start` is 0, so ball is under cup "A"
  const ball = start;

  swaps.forEach(elm => {
    // elm = [0,1]
    const firstPos = elm[0]; // 0
    const secondPos = elm[1]; // 1
    // Save this value before it gets overwritten
    const temp = record[firstPos]; // record[0] // "A"

    record[firstPos] = record[secondPos]; // record[0] = record[1] // index 0 => "B"
    record[secondPos] = temp; // record[1] // index 1 => "A"
  });

  // console.log({ record }); // ["C", "B", "A"]

  // Ball was under cup "A", what position/"index" is "A" at now? 
  const locationOfBall = record.indexOf(ball);
  console.log({ locationOfBall });
  return locationOfBall; // "index" 2
};

/* =================================================================  
  TESTS
================================================================= */

// An empty swap does nothing
console.log(find_the_ball(5, []));
// 5

console.log(find_the_ball(0, [[0, 1], [2, 1], [0, 1]]));
// 2

/* =================================================================  
  NOTES
================================================================= */

/*
CHALLENGE OVERVIEW

The best way to think about this problem is to draw it out. 
Imagine we have 3 cups, "A", "B" and "C"
record = [A, B, C]
The original position of A is index 0, the original position of B is index 1, etc
0 1 2
A B C 
We put the ball under cup A. 

Then we start swapping cups. 
[0, 1], [2, 1], [0, 1]
Swap #1: B A C // [B, A, C]
Swap #2: B C A // [B, C, A]
Swap #3: C B A // [C, B, A]

In my code though, I labeled the cups 1, 2, 3. 
Swap #0: [1, 2, 3]
Swap #1: [2, 1, 3]
Swap #2: [2, 3, 1]
Swap #3: [3, 2, 1]

The indices of the array are the three slots or positions. They don't change. 
The values of the array are the cups. The cups' positions get switched. 

--------------------------------------------------------------------
MAP 

new Map() 

new Map([ ["A", 1], ["B", 2] ])
{
  "A" => 1,
  "B" => 2
}

map.set(key, value)

map.set("A", 100)
{ 
  "A" => 100,
  "B" => 2
}

map.set("C", 3)
{
  "A" => 100,
  "B" => 2,
  "C" => 3
}

With Maps, "keys" can be objects. 

 */

/* =================================================================  
  TO DO
================================================================= */

/*
Solve more efficiently
 */

/*
--------------------------------------------------------------------
*/
