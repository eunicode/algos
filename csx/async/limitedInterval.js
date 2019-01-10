/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
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

setInterval() will repeatedly call the function until clearInterval() is called.

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
 */

/*
--------------------------------------------------------------------
*/
