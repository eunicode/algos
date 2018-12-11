/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
Coding Meetup #2 - Higher-Order Functions Series - Greet developers
https://www.codewars.com/kata/coding-meetup-number-2-higher-order-functions-series-greet-developers/train/javascript

You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an array where each object will have a new property 'greeting' with the following string value:

Hi < firstName here >, what do you like the most about < language here >?

For example, given the following input array:

var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
]

your function should return the following array:

[
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
]

TAGS: HIGHER-ORDER FUNCTIONS, CONTROL FLOW, STRINGS, REGULAR EXPRESSIONS, DECLARATIVE PROGRAMMING, ARRAYS, OBJECTS, FUNCTIONAL PROGRAMMING
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

function greetDevelopers(list) {
  return list.map(elm => {
    elm.greeting = `Hi ${elm.firstName}, what do you like the most about ${elm.language}?`;
    return elm;
  });
}

/* =================================================================  
  TESTS
================================================================= */

var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

console.log(greetDevelopers(list1));

/* =================================================================  
  NOTES
================================================================= */

/*
Difference  between for-of loop and forEach()?

forEach()
- Works only for arrays
- Gives you access to the index
- Cannot break

for-of 
- Works with any iterable
- Does not give you access to the index. If you need indices use for-of + arr.entries()
- Can break

--------------------------------------------------------------------
Difference between for-of loop and map()?

for-of
- Executes code for each element

map()
- Maps old element to new value, creating a new array
- Returns a new array

--------------------------------------------------------------------
map() gotchas: 
- Callback function must return a value

 */

/* =================================================================  
  TO DO
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/
