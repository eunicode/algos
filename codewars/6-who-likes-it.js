/* =================================================================  
  INSTRUCTIONS
================================================================= */

/* 
Who likes it?
https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

Tags: FUNDAMENTALS, FORMATTING, ALGORITHMS, STRINGS
*/

/* =================================================================  
  SOLUTIONS
================================================================= */

/*
Version 1: Control flow statements - conditionals
https://github.com/eunicode/algos/blob/05b80792932d5449b37dbf6563c9695b403dbcd3/codewars/6-who-likes-it.js

Version 2: Slightly refactored + type check
https://github.com/eunicode/algos/blob/355481f1d75f4cf2cc6b1d6cd00c05ed06f6e020/codewars/6-who-likes-it.js

Version 3: Use `throw` + `TypeError`
*/

/* =================================================================  
  CODE
================================================================= */

function likes(names) {

    // Antipattern
    if (!(names instanceof Array)) {
        // throw 'Argument is not an array';
        throw new TypeError('Argument is not an array');
    }

    const numLength = names.length;

    if (numLength <= 0) {
        return `no one likes this`;
    } else if (numLength === 1) {
        return `${names[0]} likes this`;
    } else if (numLength === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (numLength === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else if (numLength >= 4) {
        const count = numLength - 2;
        return `${names[0]}, ${names[1]} and ${count} others like this`;
    } 
}

/* =================================================================  
  TESTS
================================================================= */

// console.log(likes([]));
// 'no one likes this'

// console.log(likes(['Peter']));
// 'Peter likes this'

// console.log(likes(['Jacob', 'Alex']));
// 'Jacob and Alex like this'

// console.log(likes(['Max', 'John', 'Mark']));
// 'Max, John and Mark like this'

// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
// 'Alex, Jacob and 2 others like this'

console.log(likes('Alex'));

/* =================================================================  
  NOTES
================================================================= */

/*
CHECK IF ARGUMENT IS AN ARRAY

How do you check if a variable is an array in JavaScript? 
https://stackoverflow.com/questions/767486/how-do-you-check-if-a-variable-is-an-array-in-javascript

Check if object is an array?
https://stackoverflow.com/questions/4775722/check-if-object-is-an-array

--------------------------------------------------------------------
CONTROL FLOW & CONDITIONALS

Control flow and error handling
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling

Making decisions in your code — conditionals
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
*/

/* =================================================================  
  TO DO
================================================================= */

/*
Better way of checking type of argument
Better error handling
*/

/*
--------------------------------------------------------------------
*/
