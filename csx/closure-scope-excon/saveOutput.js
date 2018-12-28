/* =================================================================  
  INSTRUCTIONS
================================================================= */

/* 
Challenge: saveOutput
https://csx.codesmith.io/units/closures-scope-execution-context/challenge-8

Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). 
saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. 
When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values
*/

/* =================================================================  
  CODE
================================================================= */

function saveOutput(fxn, str) {
  const store = {};

  return function inner(doesItMatch) {
    if (doesItMatch === str) {
      return store;
    }
    store[doesItMatch] = fxn(doesItMatch);
    return fxn(doesItMatch);
  };
}

/* =================================================================  
  TESTS
================================================================= */

// saveOutput should create and return a function
// The function returned from saveOutput should behave exactly like the passed-in function when not called with the password string
// The function returned from saveOutput should return an object with all previously passed-in arguments and outputs when called with the password string

// Uncomment these to check your work!
const multiplyBy2 = function(num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }

/* =================================================================  
  NOTES
================================================================= */

/* 
What happens if you name your inner function?
Answer: It still works

This is an example of closure. 
Function `inner` still has access to the `store` variable.

Closure = When a function remembers the variables around it, even when that function is executed elsewhere. [Kyle Simpson]

Closure = When a function can remember and access its lexical scope, 
even when it's invoked outside its lexical scope. [YDKJS]

Closure = A function always has access to the context in which it was created.

Closure = A variable environment [scope] that has outlived its execution context, 
and remains attached to a function that also has outlived the same execution context. [CSX]

Summary
- the context function was created in
- lexical scope
- variable environment
- scope

*/

/* =================================================================  
  TO DO
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/
