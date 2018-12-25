/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
Calculating with Functions
https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

This time we want to write calculations using functions and get the results. 
Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

TAGS: FUNDAMENTALS, FUNCTIONS, CONTROL FLOW, BASIC LANGUAGE FEATURES, FUNCTIONAL PROGRAMMING, DECLARATIVE PROGRAMMING, HIGHER-ORDER FUNCTIONS
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

function zero(arg) {
  const type = typeof arg;

  if (type !== 'function') {
    return 0;
  } else {
    return arg(0);
  }
}

function one(arg) {
  const type = typeof arg;

  if (type !== 'function') {
    return 1;
  } else {
    return arg(1);
  }
}

function two(arg) {
  const type = typeof arg;

  if (type !== 'function') {
    return 2;
  } else {
    return arg(2);
  }
}

function three(arg) {
  const type = typeof arg;

  if (type !== 'function') {
    return 3;
  } else {
    return arg(3);
  }
}

function four(arg) {
  const type = typeof arg;

  if (type !== 'function') {
    return 4;
  } else {
    return arg(4);
  }
}

function five(arg) {
  const type = typeof arg;

  if (type !== 'function') {
    return 5;
  } else {
    return arg(5);
  }
}

function six(arg) {
  const type = typeof arg;

  if (type !== 'function') {
    return 6;
  } else {
    return arg(6);
  }
}

function seven(arg) {
  const type = typeof arg;

  if (type !== 'function') {
    return 7;
  } else {
    console.log('function: ', arg);
    return arg(7);
  }
}

function eight(arg) {
  const type = typeof arg;

  if (type !== 'function') {
    return 8;
  } else {
    return arg(8);
  }
}

function nine(arg) {
  const type = typeof arg;

  if (type !== 'function') {
    return 9;
  } else {
    return arg(9);
  }
}

function plus(numSecond) {
  function closure(numFirst) {
    return numFirst + numSecond;
  }

  return closure;
}

function minus(numSecond) {
  function closure(numFirst) {
    return numFirst - numSecond;
  }

  return closure;
}

function times(numSecond) {
  function closure(numFirst) {
    return numFirst * numSecond;
  }

  return closure;
}

function dividedBy(numSecond) {
  function closure(numFirst) {
    return Math.floor(numFirst/numSecond);
  }

  return closure;
}

/* =================================================================  
  TESTS
================================================================= */

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3

/* =================================================================  
  NOTES
================================================================= */

/*
I thought my first attempt didn't work bc I wasn't saving the results from times(five()) anywhere. 
Like this: 
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');

It turned out it didn't work bc I forget to define function `five` /facepalm

--------------------------------------------------------------------
Math.floor()

 */

/* =================================================================  
  TO DO
================================================================= */

/*
DRY up this code
 */

/*
--------------------------------------------------------------------
*/
