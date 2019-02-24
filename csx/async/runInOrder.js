/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
Challenge: runInOrder
https://csx.codesmith.io/units/async/challenge-run-in-order

Write a function called runInOrder that accepts as arguments in this order:
- an array of functions
- an array of numbers representing times in milliseconds

runInOrder should execute the functions in order, with the corresponding numbers in milliseconds being the time to wait from the previous invocation. 

For example -
```
function sayHi() {
  console.log('hi');
}
function sayBye() {
  console.log('bye');
}
function sayHowdy() {
  console.log('howdy');
}

runInOrder([sayHi, sayBye, sayHowdy], [300, 600, 200]);
should log: 
'hi' (after 300 ms), 
'bye' (600 ms after 'hi'), 
'howdy' (200 ms after 'bye') 
```
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

// ATTEMPT #1
// function runInOrder(...args) {
//   // Name arguments
//   const fxns = args[0];
//   const times = args[1];
//   // console.log({ fxns });
  
//   // Iterate functions array / times array
//   for(let i = 0; i < fxns.length; i++) {
//     // Set the timer for setTimeout equal to the elements in the `times` array
//     setTimeout(fxns[i], times[i]);
//   }
// }

/* -------------------------------------------------------------- */

// ATTEMPT #2
function runInOrder(...args) {
  const fxns = args[0];
  const times = args[1];

  // Create a Promise object by calling its constructor function
  // The constructor function takes an executor function as an argument. 
  // The executor function is executed immediately by the Promise implementation.
  // The executor function takes two functions as paramters. 
  // `resolve` is called when the async task completes successfully and returns the results of the task as a value.
  // For example, we can make an AJAX request inside the executor function. Then when the request completes successfully, we call the `resolve` function, and we pass it an argument that will be the value that `resolve` resolves to. 
  // `resolve` actually returns a Promise object that will be resolved with the given value.

  const promise = new Promise(function(resolve, reject) {
    // Do something asynchronous
    // In this case, we wait for a timer to call the setTimeout callback function (async).
    // After the timer goes off, we call the setTimeout callback function which calls the `resolve` function. 
    setTimeout(function() {
      fxns[0]();
      resolve('Some random value');
    }, times[0]);
  })
    // Once a Promise is fulfilled, the then's `onFulfilled` handler gets called. 
    // Since the `onFulfilled` function does not return anything, the promise returned by `then` gets resolved with a value of `undefined`
    .then(function(value) {
      // console.log('Did I get called?');
      console.log({ value }); // 'Some random value'
      setTimeout(fxns[1], times[1]);
      // return 'This is the new value';
      // return value; // Passes the value down
  }).then(function(value) {
    console.log({ value }); // `undefined`
    setTimeout(fxns[2], times[2]);
  });
}

/* =================================================================  
  TESTS
================================================================= */

function sayHi() {
  console.log('hi');
}

function sayBye() {
  console.log('bye');
}

function sayHowdy() {
  console.log('howdy');
}

runInOrder([sayHi, sayBye, sayHowdy], [200, 100, 300]);

/*
should log:
'hi' (after 200 ms)
'bye' (100 ms after 'hi')
'howdy' (300 ms after 'bye')
*/

/* =================================================================  
  NOTES
================================================================= */

/*
ATTEMPT #1 - PROBLEM: FUNCTIONS ARE IMMEDIATELY INVOKED

We have three setTimeout calls in a row. 
Each callback will be called when its timer runs out. 
The problem with this is that we want the second callback to run after the first callback. 
This does not happen bc the timer for the first callback is 200ms, while the timer for the second callback is 100ms. 
Therefore, the second callback gets pushed onto the call-stack before the first callback, and the second callback gets called before the first callback.  
It should be hi, bye, howdy
But we're getting bye, hi, howdy. 

Brainstorm
- Wrapper function and nested setTimeout?
- Closure
- Callbacks
- Promises
- Async await

// ATTEMPT #2

I used Promises and `then`, but it didn't work because I didn't call the `resolve` function in the executor function. So the `then` onFulfilled function never got called. 

--------------------------------------------------------------------
Promise
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

*/

/* =================================================================  
  TO DO
================================================================= */

/*
Make it so that `runInOrder` will work no matter how many elements are in the `fxns` array or `times` array. 
 */

/*
--------------------------------------------------------------------
*/
