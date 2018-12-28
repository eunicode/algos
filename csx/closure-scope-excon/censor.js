/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
Challenge: censor
https://csx.codesmith.io/units/closures/challenge-censor

Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. 
When two strings are given, the returned function will hold onto the two strings as a pair, for future use. 
When one string is given, the returned function will return the same string, except all instances of a first string (of a saved pair) will be replaced with the second string (of a saved pair).

Requirements
- `censor` should create and return a function
- The function returned from censor should not return anything when two strings are given
- The function returned from censor should return a string when one string is given
- The returned string should be the same as the input string, with all instances of a first string in a saved pair replaced with the second string
 */

/* =================================================================  
  SOLUTIONS
================================================================= */

/*
Version #1
https://github.com/eunicode/algos/blob/bab47c5907ecb69de8b1e8077906c892654c2014/csx/closure-scope-excon/censor.js

Version #2
Move variable declaration (str)

Move `return str` statement
Eliminate `return undefined` line

Fix no-else-return
This means you can't have an else statement after a return statement. 
Or alternatively, you can't have a return statement before an else statement. 
This is bc if an if block contains a return statement, the else block is unnecessary. The else block stuff can be placed outside the else block. 

For example, this is not allowed: 
function foo() {
  if (x) {
    return y;
  } else {
    return z;
  }
}

It should be: 
function foo() {
  if (x) {
    return y;
  }
  return z;
}

Also, you can just use if, instead of else-if. 
 */

/* =================================================================  
  CODE
================================================================= */

/* eslint-disable */

function censor() {
  // Use the outer function to store and update variables.
  // Specifically, save the arguments of `changeScene` function calls.
  // This is closure bc `inner` is invoked outside its lexical scope.
  const store = [];

  function inner(...args) {
    if (args.length === 1) {
      let str = args[0];

      store.forEach(pair => {
        str = str.replace(pair[0], pair[1]);
      });

      return str;
    }

    if (args.length === 2) {
      store.push(args);
    }
  }

  return inner;
}

/* =================================================================  
  TESTS
================================================================= */

const changeScene = censor();

changeScene('dogs', 'cats');

changeScene('quick', 'slow');

console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'

/* =================================================================  
  NOTES
================================================================= */

/*
OBSERVATIONS

Notice that we're not just replacing one word. 
We're replacing all the pairs that were passed into the function. 

--------------------------------------------------------------------
NOTES

forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

forEach() returns `undefined`. 
It's like a for loop. Nothing gets returned. 
The callback function doesn't have to return anything either. 

This differs from map(). 
map() returns a new array. 
And the callback function has to return something. 

--------------------------------------------------------------------
QUESTIONS

Requirement: The function returned from censor should not return anything when two strings are given.

For Solution Version #1
Why is it important to return `undefined` when the argument is one string? 

--------------------------------------------------------------------

 */

/* =================================================================  
  TO DO
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/
