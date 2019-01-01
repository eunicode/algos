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

// #1
console.log('I am at the beginning of the code');

// #2
setTimeout(function callback() {
  console.log('I am in the setTimeout callback function')
}, 0);

// #3
console.log('I am at the end of the code');

/* ----------------------------------------------------------------

#1: 'I am at the beginning of the code'
#3: 'I am at the end of the code'
#2: 'I am in the setTimeout callback function'

Notice how the setTimeout callback function runs after the third line 
even though the delay is set to zero.

*/

/* =================================================================  
  TESTS
================================================================= */

/* =================================================================  
  NOTES
================================================================= */

/*
First function call is the first console.log(). 
Second function call is setTimeout().
Third function call is the second console.log(). 

The setTimout callback function is placed in a 'waiting area'.
Then when timer expires, the runtime environment places the callback function into the event loop queue(?).
And I think the callback function is placed in the call stack if the call stack is empty, and the callback function is the first item in the callback queue.

--------------------------------------------------------------------
When I used `window.setTimeout(...)`, I got: Reference Error. window is not defined.
 */

/* =================================================================  
  TO DO
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/
