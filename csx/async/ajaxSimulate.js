/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
Challenge: ajaxSimulate
https://csx.codesmith.io/units/async/challenge-ajax-simulate

In this challenge we are going to simulate an AJAX call to get information from a server. 
This is not a real AJAX call, but the asynchonicity is similar.

The function ajaxSimulate takes an id and a callback function as input. 
Modify the function so that after the database array, it will set a timer that will pass the element of database whose index matches id to the callback function after 0 ms.

Create a second function storeData (outside of ajaxSimulate) that takes data as input and assigns it to the dataReceived variable already defined.

Invoke the ajaxSimulate function with an id of 1 and the storeData function as the callback. 
Immediately after, log to the console the value of dataReceived. What do you expect it to be?

Without changing anything else, copy-paste the console.log statement somewhere where it will log with the info we need.
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

let dataReceived;

function ajaxSimulate(id, callback) {
  const database = ['Aaron', 'Barbara', 'Chris'];
  // Add code here
  setTimeout( () => callback(database[id]), 0);
}

// Also add code here
function storeData(data) {
  dataReceived = data;
  console.log(dataReceived); // 'Barabara'
}

ajaxSimulate(1, storeData);

console.log({ dataReceived }); // undefined

/* =================================================================  
  TESTS
================================================================= */

/* =================================================================  
  NOTES
================================================================= */

/*
Line 52 will log `undefined` bc `dataReceived` is not assigned a value at that point in time. 
This will be the code execution order
Line 50 - ajaxSimulate function call
Line 41 - setTimeout function call
Line 52 - console.log() function call
Line 45 - storeData function call (setTimeout's callback function)

The setTimeout callback function, `storeData`, will run after Line 52 console.log() even though setTimeout() is called before Line 52 console.log(). 
This is bc setTimeout is called, but the setTimeout callback function is sent to the browser web APIs. 
Then the setTimeout callback function will be placed in the callback queue. 
Meanwhile, Line 52 console.log() will be called. 
Only once the call stack is empty, will the Event Loop push the setTimeout callback function to the call stack. 
 */

/* =================================================================  
  TO DO
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/
