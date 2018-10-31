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
*/

/* =================================================================  
  CODE
================================================================= */

function cycleIterator(arr) {
    // We store count in the outer function, so it doesn't get reset after function inner runs.
    // This local scope is better than the global scope bc global variables result in collisions.
    let count = 0;

    return function inner() {
        count += 1; // ++count;

        // We use the remainder operator to cycle through the array.
        let index = count % 3;

        // If the count is a multiple of 3, the remainder will be 0. 
        // 0 - 1 is negative one. 
        // Therefore, if count is 3, or 6, etc, we want to return the third element in the array.
        // aka, the element at index 2. 
        if (index === 0) {
            return arr[2];
        }

        // We subtract one bc element 1 is at index 0.
        return arr[index - 1];
    }
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
When using the remainder operator, if the dividend is less than the divisor, the remainder operator will return the dividend. 
Example: 4 % 8; // 4

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