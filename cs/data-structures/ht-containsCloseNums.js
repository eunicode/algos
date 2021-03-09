/* =================================================================  
                          INSTRUCTIONS
================================================================= */

/*
INSTRUCTIONS

containsCloseNums
https://app.codesignal.com/interview-practice/task/njfXsvjRthFKmMwLC

Interview Practice > Hash table

medium

--------------------------------------------------------------------
REQUIREMENTS

--------------------------------------------------------------------
ASSURANCES

 */

/* =================================================================  
                          PRE-NOTES
================================================================= */

/* 
OBSERVATIONS

Find duplicate
Find abs difference btw indices
There could be multiple duplicates: 5,5 and 2,2
There could be triplicates, etc: 5,5,5
Abs difference <= k

--------------------------------------------------------------------
PLAN
*/

/* =================================================================  
                          CODE
================================================================= */

/* eslint-disable */

// ATTEMPT #1 - 23/24 TESTS PASSED

function containsCloseNums1(nums, k) {
  // Create array to store keys that have arrays / nums that are repeated
  const numsRepeat = [];

  // Create map, where key is num, and value is index. Use array to hold indices for duplicate nums
  const myMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!myMap.has(nums[i])) {
      myMap.set(nums[i], [i]);
    } else {
      myMap.get(nums[i]).push(i);
      numsRepeat.push(nums[i]);
    }
  }
  console.log(myMap);
  console.log(numsRepeat);

  // Iterate through all nums that are repeated
  // Check difference btw adjacent indices in array
  for (const num of numsRepeat) {
    for (let i = 0, j = 1; j < myMap.get(num).length; i++, j++) {
      if (myMap.get(num)[j] - myMap.get(num)[i] <= k) {
        return true;
      }
    }
  }

  return false;
}

/* -------------------------------------------------------------- */

// SOLUTION - ONE FOR LOOP & OVERWRITE HASH TABLE VALUES

function containsCloseNums(nums, k) {  
  // Create map, where key is num, and value is index. 
  const myMap = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    // If number doesn't exist in hash table, add it
    if (!myMap.has(nums[i])) {
      myMap.set(nums[i], i);
    } 
    // If number does exist in hash table
    else {
      // Check if the indices gap is <= k
      if (i - myMap.get(nums[i]) <= k) {
        return true;
      } 
      // !Important: If the gap isn't <=k, then we can safely overwrite the old index
      // We are only comparing adjacent repeated numbers
      else {
        myMap.set(nums[i], i);
      }
    }
  }
    
  return false;
}

/* =================================================================  
                          TESTS
================================================================= */

/* eslint-enable */

console.log(containsCloseNums([1, 0, 1, 1], 1));
// true

/* =================================================================  
                          NOTES
================================================================= */

/*
FOR LOOPS

We can initialize two variables in initialization
for (let i = 0, j = 1; ... ; ...)

We can increment two variables in final-expression
for (...; ...; i++, j++)

Just be careful to separate with commas, instead of semi-colons

Multiple counters in Javascript for loop
https://stackoverflow.com/questions/8348792/multiple-counters-in-javascript-for-loop

for( [init]; [test]; [increments]) { [block] }

--------------------------------------------------------------------
We want to find the absolute difference that is <= k

So let's say we have an array of indices, and k = 10
[0, 4, 6, 8, 11]
We don't need to do a nested for loop to get all combinations of pairs
We just need to check the difference btw adjacent numbers
Bc the array is sorted
And bc we only want to check if there is an abs diff that is LESS THAN or equal to k. 
So we don't need to check 0 and 11

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
