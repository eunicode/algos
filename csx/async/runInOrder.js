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
Solution #1 - Promises w/ for loop

Solution #2 - Solve without Promises
https://www.youtube.com/watch?v=micF_oeeeko

 */

/* =================================================================  
  CODE
================================================================= */

/* eslint-disable */

// ATTEMPT #1 - FOR LOOP

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

// ATTEMPT #2 - PROMISES - PARTIAL SOLUTION
// - FUNCTIONS ARE CALLED IN ORDER
// - FUNCTION #1 IS CALLED AFTER DELAY
// - FUNCTION #2 IS CALLED AFTER DELAY
// - BUT FUNCTION #3 IS CALLED WITHOUT DELAY
// - HARDCODED FOR AN ARRAY WITH 3 ELEMENTS

// function runInOrder(...args) {
//   const fxns = args[0];
//   const times = args[1];

//   // eslint-disable-next-line prefer-arrow-callback
//   const promise = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       fxns[0]();
//       resolve('Some random value');
//     }, times[0]);
//   })
//     .then(value => {
//       // console.log('Did I get called?');
//       // console.log({ value }); // 'Some random value'
//       setTimeout(fxns[1], times[1]);
//       // return 'This is the new value';
//       // return value; // Passes the value down
//     })
//     .then(value => {
//       // console.log({ value }); // `undefined`
//       setTimeout(fxns[2], times[2]);
//     })
//     .catch(error => console.log(error));
// }

/* -------------------------------------------------------------- */

// ATTEMPT #3 - PROMISES + FOR LOOP
// - FUNCTIONS ARE CALLED IN ORDER
// - BUT AFTER INITIAL DELAY, FUNCTIONS #1, #2, #3 ARE CALLED IMMEDIATELY AFTER ONE ANOTHER

// function runInOrder(fxns, times) {
//   let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       fxns[0]();
//       resolve('first');
//     }, times[0]);
//   });

//   for (let i = 1; i < fxns.length; i++) {
//     p = p.then(value => setTimeout(() => fxns[i]()), times[i]);
//   }
// }

/* -------------------------------------------------------------- */

// ATTEMPT #4 - PARTIAL SOLUTION - PROMISES + FOR LOOP
// - FUNCTIONS ARE CALLED IN ORDER
// - BUT AFTER INITIAL DELAY, FUNCTIONS #1, #2, #3 ARE CALLED IMMEDIATELY ONE AFTER ANOTHER
// - This code didn't work bc I didn't return the new promise inside then()'s onFulfilled function

// function runInOrder(fxns, times) {
//   // Create an initial immediately resolving promise
//   let p = Promise.resolve();

//   // Sequential composition
//   // Chain new promises as the previous ones resolve
//   // aka Promise.resolve().then(func1).then(func2).then(func3)
//   for (let i = 0; i < fxns.length; i += 1) {
//     // Chain `then` methods to the first Promise object
//     p = p.then(() => {
//       // Create a new promise that only gets resolved after timer expires
//       new Promise(function(resolve) {
//         setTimeout(function() {
//           fxns[i]();
//           // Call `resolve` after async task completes
//           resolve();
//         }, times[i]);
//       })
//     });
//   }

// }

/* -------------------------------------------------------------- */

// ATTEMPT #5 - PROMISES + FOR LOOP - SOLUTION
// - RETURN NEW PROMISE IN THEN()'S ONFULFILLED FUNCTION
// - We return another promise in then()'s onFulfilled function bc we have more async tasks.
// - We want 'hi' to get logged after one second, the same for 'bye' and 'howdy. 
// - So we create a new promise, we wait for setTimeout's timer to expire, then we call the callback function which calls fxn #1 (logs 'hi'). 
// And since async task has finished (waiting for the timer to expire), we call resolve(). 
// onFulfilled()'s promise gets resolved, then then()'s promise gets resolved. 
// Since then()'s promise gets resolved, that calls the next then()'s onFullfilled function. 

function runInOrder1(fxns, times) {

  let p = Promise.resolve();

  for (let i = 0; i < fxns.length; i +=1 ) {

    p = p.then(function(value) {
      // DON'T FORGET TO RETURN NEW PROMISE OBJECT
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          fxns[i]();
          resolve();
        }, times[i]);
      });
    });

  }

}

// ALTERNATE SOLUTION

// function runInOrder(fxns, times) {
//   for (let i = 0, p = Promise.resolve(); i < fxns.length; i += 1) {
//     p = p.then(function(value) {
//       return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//           fxns[i]();
//           resolve();
//         }, times[i]);
//       });
//     });
//   }
// }

/* -------------------------------------------------------------- */

// SOLUTION #2 - SOLVE W/OUT PROMISES

function runInOrder(fxns, times) {
  let acc = 0;

  for (let i = 0; i < times.length; i += 1) {
    acc = acc + times[i];
    setTimeout(fxns[i], acc);
  }
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

// runInOrder([sayHi, sayBye, sayHowdy], [200, 100, 300]);
runInOrder([sayHi, sayBye, sayHowdy], [1000, 1000, 1000]);
// runInOrder([sayHi, sayBye, sayHowdy], [1000, 2000, 3000]);

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
PROMISES

Promise
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

Create a Promise object by calling its constructor function
The constructor function takes an executor function as an argument. 
The executor function is executed immediately by the Promise implementation.
The executor function takes two functions as paramters: resolve and reject. 
Call `resolve` when the async task completes successfully to return the results of the task as a value.
For example, we can make an AJAX request inside the executor function. Then when the AJAX request completes successfully, we call the `resolve` function, and we pass it an argument that will be the value that `resolve` resolves to. 
`resolve` actually returns a Promise object that will be resolved with the given value.

Inside executor function: 
Do something asynchronous
In this case, we wait for a timer to call the setTimeout callback function (async).
After the timer goes off, we call the setTimeout callback function, which calls the `resolve` function. 
The promise resolves into a value. 

Once a Promise is fulfilled, the then()'s `onFulfilled` handler gets called. 
If the `onFulfilled` function does not return anything, the promise returned by `then` gets resolved with a value of `undefined`

--------------------------------------------------------------------
PROMISES - SEQUENTIAL COMPOSITION

See more notes in Evernote

Composition
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#Composition

JavaScript ES6 promise for loop [duplicate]
https://stackoverflow.com/questions/40328932/javascript-es6-promise-for-loop

Promise.resolve()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve

Promise.prototype.then()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

If then()'s onFulfilled handler function returns another pending promise object, 
the resolution of the promise returned by then() will be subsequent to the resolution of the promise returned by the handler. 
Also, the value of the promise returned by then(), will be the same as the value of the promise returned by the handler.

then() returns a Promise. 
The onFulfilled handler function can also return a Promise. 
1. Resolve onFulfilled()'s promise object. 
2. Resolve then()'s promise object. 
3. The value of then()'s promise object is equal to the value of onFulfilled()'s promise object.
*/

/* =================================================================  
  TO DO
================================================================= */

/*
- ✓ Make it so that `runInOrder` will work no matter how many elements are in the `fxns` array or `times` array. 
- Solve without promises
- Use async/await
 */

/*
--------------------------------------------------------------------
*/
