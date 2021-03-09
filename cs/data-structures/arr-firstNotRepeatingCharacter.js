/* =================================================================  
  INSTRUCTIONS
================================================================= */

/* 
firstNotRepeatingCharacter
https://app.codesignal.com/interview-practice/task/uX5iLwhc6L5ckSyNC

Note: Write a solution that only iterates over the string once, 
and uses O(1) additional memory.

Given a string `s`, find and return the first instance of a non-repeating character in it. 
If there is no such character, return '_'.

Category: Arrays
Level: Easy
*/

/* =================================================================  
  SOLUTIONS
================================================================= */

/*
With nested arrays
https://github.com/eunicode/algos/blob/9cc317b664f12626ff9b4523a9dfd1ae5e883e24/codesignal/data-structures/arr-firstNotRepeatingCharacter.js

Current
https://github.com/eunicode/algos/blob/master/codesignal/data-structures/arr-firstNotRepeatingCharacter.js
*/

/* =================================================================  
  CODE
================================================================= */

/* eslint-disable */

function firstNotRepeatingCharacter(s) {
  // Split string into array of characters
  const arr = s.split('');
  console.log({ arr });

  // Store count for each character in object
  const obj = {};

  // If object has key (character), increment its value
  // If object doesn't have key, add key and set its value to 1
  arr.forEach(element => {
    if (obj.hasOwnProperty(element)) {
      obj[element] = obj[element] + 1;
    } else {
      obj[element] = 1;
    }
  });

  console.log(obj);

  // Convert object into an array
  // Object.entries() creates an array of arrays.
  // The inner array has two values. The first is the key, the second is the value.
  const objToArray = Object.entries(obj);
  console.log({ objToArray });

  // Iterate through array, if a "key" has a "value" of 1, then that key is a unique character.
  // Return the first unique character.
  for (const pair of objToArray) {
    if (pair[1] === 1) {
      return pair[0];
    }
  }

  // If there are no unique characters, return '_' string
  return '_';
}

/* =================================================================  
  TESTS
================================================================= */

console.log(firstNotRepeatingCharacter('abacabad'));
// Expected Output: "c"

// Input: "abacabaabacaba"
// Output: "_"

// Input: "z"
// Output: "z"

// Input: "bcb"
// Output: "c"

/* =================================================================  
  NOTES
================================================================= */

/* 
TRAVERSAL ORDER OF OBJECT PROPERTIES

Objects are unordered key/value-pair data structures.

Questions: 
Are properties added in an arbitrary order? // I don't think so. 
When are object properties traversed/looped in a specified order, and when are they not?
// It depends if the operation traverses own keys or all (own + inherited) keys. 
See 2ality post.

for...in
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

A for...in loop iterates over the properties of an object in an arbitrary order...

The traversal order of object properties in ES6
http://2ality.com/2015/10/property-traversal-order-es6.html

The ECMAScript 6 specification defines in which order the properties of an object should be traversed.

The following operations in ECMAScript 6 traverse the keys of properties 

Own property keys:
- Object.keys()
- Object.getOwnPropertyNames()
- Reflect.ownKeys()

All (own and inherited) keys:
- Reflect.enumerate()
- for-in loop

Traversing the own keys of an object 

Enumerating the string keys of all enumerable properties

Out Of Order Keys in ES6 Objects
https://hackernoon.com/out-of-order-keys-in-es6-objects-d5cede7dc92e

Expecting keys to be in the same order they were added was a long-time bad assumption to make in JavaScript before ES6.
ES6 introduced property key order, putting into the specification an expectation of how keys will be ordered.

--------------------------------------------------------------------
FOR-OF STATEMENT

More concise than for loop
Like for loop, you can break from it. 
*/

/* =================================================================  
  TO DO
================================================================= */

/*
Solve with maps?
*/
