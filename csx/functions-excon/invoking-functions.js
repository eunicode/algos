/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
Challenge: Invoking Functions
https://csx.codesmith.io/units/functions-execution-context/challenge-invoking-functions

Examine the code given to you. 
Try to make the calls variable equal to 'JerryKramerGeorgeElaine' with only a single invocation to the function jerry.

let calls = "";

function jerry(str) {

}

function george(str) {

}

function elaine(str) {

}

function kramer(str) {

}

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

// GIVEN
let calls = "";

// VERSION #1 - MANIPULATE GLOBAL VARIABLE, DON'T USE PARAMETERS

// function jerry(str) {
//   calls = "Jerry";
//   kramer();
//   george();
//   elaine();
//   return calls;
// }

// function george(str) {
// 	calls = calls + "George";
// }

// function elaine(str) {
// 	calls = calls + "Elaine";
// }

// function kramer(str) {
// 	calls = calls + "Kramer"
// }

// VERSION #2 - MANIPULATE GLOBAL VARIABLE, PASS PARAMETER

// function jerry(str) {
//   calls = str + "Jerry";
// 	 kramer(calls);
//   george(calls);
//   elaine(calls);
//   return calls;
// }

// function george(str) {
//   calls = str + "George";
// }

// function elaine(str) {
//   calls = str + "Elaine";
// }

// function kramer(str) {
//   calls = str + "Kramer";
// }

// VERSION #3 - 

function jerry(str) {
  // Concat str with Jerry
  str += "Jerry";

  // Return the invocation of the `kramer` method
  return kramer(str);
}

function george(str) {
  // Concat str with George
  str += "George";

  // Return invocation of `elaine`
  return elaine(str);
}

function elaine(str) {
  // Concat str with Elaine
  str += "Elaine";

  // Return str
  return str;
}

function kramer(str) {
  // Concat str with Kramer
  str += "Kramer";

  // Return invocation of `george`
  return george(str);
}

// Jerry -> Kramer -> George -> Elaine

/* =================================================================  
  TESTS
================================================================= */

calls = jerry(calls);
console.log(calls);
// should return: 'JerryKramerGeorgeElaine'

/* =================================================================  
  NOTES
================================================================= */

/*
SOLUTION #2 

Solution version #2 is kinda useless bc the argument is a global variable. 
However, version #2 is better than version #1, bc the order in version #2 is flexible. We can call the functions in a different order inside `jerry` and get a different concatenated string.

--------------------------------------------------------------------
SOLUTION #3

This reminds me of recursion. 
For example, 
fibonacci(5) = fibonacci(4) + fibonacci(3)
fibonacci(4) = fibonacci(3) + fibonacci(2)
fibonacci(3) = fibonacci(2) + fibonacci(1)
fibonacci(2) = fibonacci(1) + fibonacci(0)
A recursive method is a method that calls itself, where each call makes the problem simpler, until you reach a condition where the method no longer calls itself, aka the base case. 

This isn't recursion, though. But it reminds me of recursion bc we don't know what the value of a function call is until later. 
jerry("") returns kramer(str)
But what is kramer(str)? 
kramer(str) returns george(str). 
george(str) returns elaine(str). 
elaine(str) returns the updated string. 
We're updating the string in each function, and then passing the updated string to the next function. 
We're snowballing the string by passing it from one function to another function to another function. 
All these functions have access to `str` variable bc we've passed it to them when we called them. 

--------------------------------------------------------------------
Is this related to currying? 
 */

/* =================================================================  
  TO DO
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/
