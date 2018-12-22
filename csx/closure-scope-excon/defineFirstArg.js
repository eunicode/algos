/* =================================================================  
  INSTRUCTIONS
================================================================= */

/* 
Challenge: defineFirstArg
https://csx.codesmith.io/units/closures-scope-execution-context/challenge-10

Create a function defineFirstArg that accepts a function and an argument. 
Also, the function being passed in will accept at least one argument. defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. 
Additional arguments needed by the passed-in function will need to be passed into the returned function.

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

/* ATTEMPT #1
function defineFirstArg(cb, firstNum) {
  return function inner(moreNum) {
    cb(firstNum, moreNum);
  }
} */

// ATTEMPT #2
// function defineFirstArg(cb, firstNum) {
//   return function inner(moreNum) {
//     console.log({ firstNum });
//     console.log({ moreNum });
//     cb(firstNum, moreNum);
//   };
// }

// function test(x) {
//   console.log({ x });
//   return x;
// }

// test(999);

// ATTEMPT #3
// function defineFirstArg(passedFxn, firstArg) {
//   return function inner() {
//     return passedFxn(firstArg);
//   }
// }

// ATTEMPT #4 - WORKS WITH ONE PARAMETER
// function defineFirstArg(passedFxn, firstArg) {
//   return function inner(addArg) {
//     return passedFxn(firstArg, addArg);
//   }
// }

// SOLUTION #1 - REST + SPREAD - WORKS WITH UNSPECIFIED NUMBER OF PARAMETERS
function defineFirstArg(passedFxn, firstArg) {
  return function inner(...addArg) { // parameter - rest 
    return passedFxn(firstArg, ...addArg); // function call - spread
  }
}

/* =================================================================  
  TESTS
================================================================= */

/*
REQUIREMENTS
- defineFirstArg should create and return a function
- The function returned from defineFirstArg should invoke the passed-in function with the passed-in argument as its first argument
- The function returned from defineFirstArg should accept additional arguments and invoke the passed-in function with them
*/

const subtract = function(big, small) {
  console.log({ big });
  console.log({ small });
  return big - small;
};

const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15

// MY TESTS - Three Arguments
const three = function(big, med, small) {
  return big - med - small;
}

const threeArgs = defineFirstArg(three, 100);
console.log(threeArgs(20, 10)); // 30

/* =================================================================  
  NOTES
================================================================= */

/* 
MY QUESTIONS

How do we access the arguments of the passed in function?

--------------------------------------------------------------------
MY NOTES

We don't know much about the passed-in function. It could be anything. 
We only know the passed-in function will have at least one parameter. 
And we know that additional arguments needed by the passed-in function will be passed into the returned function. 
Therefore, the returned function `inner` needs to accept a varying number of arguments. 
And when we call the passed-in function, we need to call it with a varying number of arguments. 
We can use the rest parameter syntax. 

We don't need to define a `firstArg` parameter in function `inner` bc of scope/closure. 
It's closure bc we're returning/exporting function `inner`.
We can use the `firstArg` variable inside `inner` bc `inner` is lexically inside `defineFirstArg` and bc of closure. 

Don't forget to return what the called function returns.

--------------------------------------------------------------------
REST PARAMETERS

Rest parameters
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a); // a, one
  console.log("b", b); // b, two
  console.log("manyMoreArgs", manyMoreArgs); // manyMoreArgs, [three, four, five, six]
}

myFun("one", "two", "three", "four", "five", "six");

--------------------------------------------------------------------
SPREAD SYNTAX

Spread syntax will assign/match arguments to parameters. 

// REST
test(...addArg)
test(1, 2, 3)
addArg = [1, 2, 3] // via rest parameters

// SPREAD
many(...addArg)
many(a, b, c)
many(1, 2, 3)  // via spread syntax

`a` parameter = 1
`b` parameter = 2
`c` parameter = 3

function test(...addArg) { 
  function many(a, b, c) { return a + b + c; }
  return many(...addArg);
}

test(1, 2, 3); // 6

--------------------------------------------------------------------
CURRYING


*/

/* =================================================================  
  TO DO
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/
