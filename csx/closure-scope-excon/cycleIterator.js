/* =================================================================  
  INSTRUCTIONS
================================================================= */

/* 
Challenge: cycleIterator
https://csx.codesmith.io/units/closures-scope-execution-context/challenge-9

Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. 
When first invoked, the returned function will return the first element of the array. 
When invoked a second time, the returned function will return the second element of the array, and so forth. 
After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.
*/

/* =================================================================  
  SOLUTIONS
================================================================= */

/*
Version 1 - "PRE-INCREMENT"
https://github.com/eunicode/algos/blob/7d5e0523da36573fc06d0f10ed75fcb6243000a7/csx/3-closure-scope-excon/cycleIterator.js

Version 2 - POST-INCREMENT
https://github.com/eunicode/algos/blob/962eb79b3c8cbd2991ef2daea6da07f57d078ea9/csx/3-closure-scope-excon/cycleIterator.js
*/

/* =================================================================  
  CODE
================================================================= */

function cycleIterator(arr) {
  // We store count in the outer function, so it doesn't get reset after function inner runs.
  // This local scope is better than the global scope bc global variables result in collisions.
  // `count` is available to `inner` bc of lexical scoping.
  // `count` survives bc of closure.
  let index = 0;

  return function inner() {
    // POST-INCREMENT
    // When post-incrementing, you can avoid index - 1, bc index is equal to 0.
    const day = arr[index++]; // At this point, index = 0

    if (index >= arr.length) {
      // Now, index = 1
      index = 0;
    }

    return day;
  };
}

/* =================================================================  
  TESTS
================================================================= */

/* cycleIterator should create and return a function
The function returned from cycleIterator should return the first element of the array the first time it is called
The function returned from cycleIterator should return the second element of the array the second time it is called
The function returned from cycleIterator should return the third element of the array the third time it is called
The function returned from cycleIterator should cycle back to the first element after returning the last element of the array */

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'
console.log(getDay());
console.log(getDay());
console.log(getDay());
console.log(getDay());

/* =================================================================  
  NOTES
================================================================= */

/* 
REMAINDER OPERATOR

When using the remainder operator, if the dividend is less than the divisor, the remainder operator will return the dividend. 
Example: 4 % 8; // 4

--------------------------------------------------------------------
POST-INCREMENT VS PRE-INCREMENT

index = index + 1;  // has same effect as pre-incrementing      
const day = arr[index];   

  vs

const day = arr[index++]; // post-increment

const arr = ['a', 'b', 'c'];
let index = 0;
arr[index++]; // 'a'

--------------------------------------------------------------------
QUESTIONS

Is `outer` stored inside the VariableEnvironment or execution context? 
Does outer aka [[Scope]] = VariableEnvironment or execution context? 
[[Scope]] vs scope?
*/

/* =================================================================  
  TO DO
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/
