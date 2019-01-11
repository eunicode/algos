/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
Challenge: limitedInterval
https://csx.codesmith.io/units/async/challenge-limited-interval

Write a function called limitedInterval that accepts as arguments in this order -
- callback function
- wait time in milliseconds
- limit time in milliseconds.

limitedInterval should run the callback once every wait milliseconds, up to limit milliseconds, and then stop.
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

// Attempt #1
// function limitedInterval(callback, wait, limit) {
// 	const iterations = Math.floor(limit/wait);
  
//   for (let i = 1; i <= iterations; i++) {
//     setInterval(callback, wait);
//   }
// }

// Version #1
function limitedInterval(callback, wait, limit) {
	const iterations = Math.floor(limit/wait);
  
  let numOfCalls = 0;
  
	const intervalID = setInterval(() => {
    if (numOfCalls < iterations) {
      numOfCalls+=1;
    	callback();
    } else {
      clearInterval(intervalID);
    }
  }, wait);
}

/* =================================================================  
  TESTS
================================================================= */

limitedInterval(() => console.log('repeating'), 100, 550); // should log 'repeating' once per 100 ms, five times.

/* =================================================================  
  NOTES
================================================================= */

/*
LESSONS LEARNED

- setInterval() will repeatedly call the callback function until clearInterval() is called.
- You need to give setInterval() an ID in order to be able to stop it with clearInterval().
- You also need to give clearInterval() the ID (the first argument). 
- Be careful of off-by-one errors. If outer variable is 0, and you increment it inside an if block, then the if condition should be less than target.

--------------------------------------------------------------------
WindowOrWorkerGlobalScope.setInterval()
https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

WindowOrWorkerGlobalScope.clearInterval()
https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval

 */

/* =================================================================  
  TO DO
================================================================= */

/*
Solve with setTimeout()
 */

/*
--------------------------------------------------------------------
*/
