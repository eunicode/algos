/* =================================================================  
                          INSTRUCTIONS
================================================================= */

/*
INSTRUCTIONS

The Supermarket Queue
https://www.codewars.com/kata/the-supermarket-queue/train/javascript

Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.

P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, 
with relation to running multiple processes at the same time: 

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

// ATTEMPT #1 - fails if you have more tills than customers

// [2, 10, 5, 6, 4, 3, 2, 5]
function queueTime1(customers, n) {
  console.log({ customers });

  // If array is empty, return 0;
  if (customers.length === 0) {
    return 0;
  }

  // If there's one till, add everything in array
  if (n === 1) {
    return customers.reduce((acc, curr) => acc + curr, 0);
  }

  // Create totalTime obj, fill it with initial values
  const totalTime = {};
  let max = 0;

  for (let i = 0; i < n; i++) {
    totalTime[`totalTime${i + 1}`] = customers[i];

    if (customers[i] > max) {
      max = customers[i];
    }
  }

  console.log({ totalTime });
  console.log({ max });

  // Find initial max

  // [2, 10, 5, 6, 4, 3, 2, 5]
  // While loop
  let pointer = n;
  const people = n;

  while (pointer < customers.length) {
    // Iterate totalTime object
    for (const key in totalTime) {
      if (totalTime.hasOwnProperty(key)) {
        // If totalTime < max, increment totalTime and increment pointer
        if (totalTime[key] < max) {
          totalTime[key] = totalTime[key] + customers[pointer];
          pointer += 1;

          // If the new max is greater than old max, update max
          if (totalTime[key] > max) {
            max = totalTime[key];
          }
        }
      }
    } // for
    //     console.log({ pointer })
    //     people = pointer + 1;
    pointer += 1;
  } // while

  console.log({ max });
}

// SOLUTION - NESTED FOR LOOP

function queueTime(customers, n) {
  // If customers array is empty
  if (customers.length === 0) {
    return 0;
  }

  // If we have one till
  if (n === 1) {
    return customers.reduce((acc, curr) => acc + curr, 0);
  }

  // If we have more tills than customers
  if (n > customers.length) {
    return Math.max(...customers);
  }

  // Create array to find min;
  const tills = [];

  // Fill tills
  for (let i = 0; i < n; i++) {
    tills[i] = customers[i];
  }

  // We add next customer to the smallest till
  for (let i = n; i < customers.length; i++) {
    // Find the smallest till
    const min = Math.min(...tills);
    // Find index of smallest till 
    const minInd = tills.indexOf(min);
    // Update till with cumulative time
    tills[minInd] = tills[minInd] + customers[i];
  }

  console.log({ tills });
  return Math.max(...tills);
}

/* =================================================================  
                          TESTS
================================================================= */

/* eslint-enable */

console.log(queueTime([], 1)); // 0
console.log(queueTime([1, 2, 3, 4], 1)); // 10
console.log(queueTime([2, 2, 3, 3, 4, 4], 2)); // 9
// console.log(queueTime([1, 2, 3, 4, 5], 100)); // 5

/* EDGE CASES
No customers in line
100 tills, and 5 customers */

/* =================================================================  
                          NOTES
================================================================= */

/*
The key to solving this problem is realizing we need to find the minimum time.
The till with the shortest time is going to be the till that gets the next customer.

[2, 5, 1, 3, 6]
till 1: ○ ○ ● ● ● ● ● ●
till 2: ○ ○ ○ ○ ○ 
till 3: ○ ● ● ●
2 - till 1
5 - till 2
1 - till 3
3 - till 3
6 - till 1

--------------------------------------------------------------------
This is O(N^2)
We need to iterate the customers array
And for every customer, we need to iterate the tills array. 

INNER FOR LOOP
We need to iterate a hash table to find the minimum value
We need to iterate a hash table to find the key of the minimum value

Remember what the output must be: the total time
We need to keep track of the total time
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
