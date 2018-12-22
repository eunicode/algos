/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
Challenge: dateStamp
https://csx.codesmith.io/units/closures/challenge-date-stamp

Create a function dateStamp that accepts a function and returns a function. 
The returned function will accept whatever arguments the passed-in function accepts, and return an object with 
- a date key whose value is today's date (not including the time) represented as a human-readable string (see the Date object for conversion methods), 
- and an output key that contains the result from invoking the passed-in function.

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

function dateStamp(func) {
  function inner(...args) { // function definition -> `rest`
    const obj = {};

    const todaysDate = new Date().toDateString();

    obj.date = todaysDate;

    obj.output = func(...args); // function call -> `spread` 

    return obj;
  }

  return inner;
}

/* =================================================================  
  TESTS
================================================================= */

const stampedMultBy2 = dateStamp(n => n * 2);

console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }

console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }

/* 
- dateStamp should create and return a function
- The function returned from dateStamp should return an object
- The returned object should have a date key and an output key
- The date key on the returned object should have today's date as its value
- The output key on the returned object should contain the result from invoking the passed-in function 
*/

/* =================================================================  
  NOTES
================================================================= */

/*
How do we access the passed-in function's parameters?

We don't need to bc we're just going to call the passed-in function. 
We're not going to do anything with the passed-in function's parameters. 

--------------------------------------------------------------------
How do we handle writing a generic function that could have a varying number of parameters?

We use `rest` to package the arguments into an array. 
Then we use `spread` to spread the arguments when calling the function.

In this case, we're calling the passed-in function with arguments passed to the inner function. 
We don't know how many arguments the inner function will receive. 

--------------------------------------------------------------------
JAVASCRIPT DATE OBJECT

Date constructor creates an object.

Convert date object to string with Date.toJSON().

const todaysDate = new Date().toJSON().substring(0, 10);
// '2018-12-21'

Javascript date method without time
https://stackoverflow.com/questions/26528085/javascript-date-method-without-time

--------------------------------------------------------------------
Date.prototype.toDateString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString

The toDateString() method returns the date portion of a Date object in human readable form in American English.

Date.prototype.toJSON()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON

The toJSON() method returns a string representation of the Date object.

--------------------------------------------------------------------
slice() vs substring()

--------------------------------------------------------------------
 */

/* =================================================================  
  TO DO
================================================================= */

/*
Solve with destructuring
 */

/*
--------------------------------------------------------------------
*/
