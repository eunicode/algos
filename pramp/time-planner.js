/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
Time Planner
https://www.pramp.com/challenge/3QnxW6xoPLTNl5jX5Lg1

Implement a function meetingPlanner that given the availability, slotsA and slotsB, 
of two people and a meeting duration dur, returns the earliest time slot that works 
for both of them and is of duration dur. 
If there is no common time slot that satisfies the duration requirement, 
return an empty array.

REQUIREMENTS
Return the earliest time slot that works for both people

GIVEN
The time slots are disjointed
The time slots are sorted by the slots' start time
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

/*
slotsA = [[10, 50], [60, 120], [140, 210]]
slotsB = [[0, 15], [60, 70]]
dur = 8
*/

// SOLUTION - BRUTE FORCE / NESTED FOR LOOPS

// Simplify problem by thinking of it as [A, B, C] & [Y, Z]
// We need nested for loops to get AY, AZ, BY, BZ, CY, CZ

// Think about how to get the overlap. 
// We need a start time and end time. 
// Then we need to check if start + dur is in the range of [start, end]
// For an overlap, if it exists, the start time must be the greater number
// For an overlap, if it exists, the end time must be the smaller number

function meetingPlanner(slotsA, slotsB, dur) {
  let start = 0;
  let end = 0;

  for (let i = 0; i < slotsA.length; i++) {
    for (let j = 0; j < slotsB.length; j++) {
      if (slotsA[i][0] > slotsB[j][0]) {
        start = slotsA[i][0];
      } else {
        start = slotsB[j][0];
      }

      if (slotsA[i][1] < slotsB[j][1]) {
        end = slotsA[i][1];
      } else {
        end = slotsB[j][1];
      }

      if (start + dur <= end) {
        return [start, start + dur];
      }
    }
  }

  return [];
}

/* =================================================================  
  TESTS
================================================================= */

console.log(meetingPlanner([[7, 12]], [[2, 11]], 5));
// Expected: []

console.log(meetingPlanner([[6, 12]], [[2, 11]], 5));
// Expected: [6,11]

console.log(meetingPlanner([[1, 10]], [[2, 3], [5, 7]], 2));
// Expected: [5,7]

console.log(meetingPlanner([[0, 5], [50, 70], [120, 125]], [[0, 50]], 8));
// Expected: []

console.log(
  meetingPlanner([[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 70]], 8)
);
// Expected: [60,68]

console.log(
  meetingPlanner([[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 72]])
);
// Expected: [60,72]

/* =================================================================  
  NOTES
================================================================= */

/*
TIME COMPLEXITY
Nested for loops
O(N * M)
N = length of first array
M = length of second array
 */

/* =================================================================  
  TO DO
================================================================= */

/*
Try using destructuring
https://eslint.org/docs/rules/prefer-destructuring

Find out how to solve this more efficiently
 */

/*
--------------------------------------------------------------------
*/
