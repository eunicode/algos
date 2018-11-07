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

/*ATTEMPT #1
function defineFirstArg(cb, firstNum) {
  return function inner(moreNum) {
    cb(firstNum, moreNum);
  }
}*/

function defineFirstArg(cb, firstNum) {
  return function inner(moreNum) {
    console.log({ firstNum });
    console.log({ moreNum });
    cb(firstNum, moreNum);
  }
}

// function test(x) {
//   console.log({ x });
//   return x;
// }

// test(999);

/* =================================================================  
  TESTS
================================================================= */
/*
defineFirstArg should create and return a function
The function returned from defineFirstArg should invoke the passed-in function with the passed-in argument as its first argument
The function returned from defineFirstArg should accept additional arguments and invoke the passed-in function with them
*/

const subtract = function(big, small) { 
  console.log({ big });
  console.log({ small });
  return big - small; 
};

const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15

/* =================================================================  
  NOTES
================================================================= */ 

/* 
MY QUESTION
How do we access the arguments of the passed in function?

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