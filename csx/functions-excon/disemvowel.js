/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
Challenge: disemvowel
https://csx.codesmith.io/units/functions-execution-context/challenge-disemvowel

Write a function disemvowel that takes in a string and returns a new string with all vowels removed.

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

// SOLUTION #1 - FILTER

// function disemvowel(string) {
// 	const arr = [...string];
  
//   const consonants = arr.filter(elm => {
//     if (elm === 'a' || elm === 'e' || elm === 
//        'i' || elm === 'o' || elm === 'u') {
//       return false;
//     } 
    
//     else if (elm === 'A' || elm === 
//     'E' || elm === 'I' || elm === 'O' || elm === 'U') {
//       return false;
//     } 
    
//     else return true;
//   });
  
//   return consonants.join('');
// }

// SOLUTION #2 - REGEX

// function disemvowel(string) {
//   // Create a regexp that matches one of the characters in the character set
//   // including lowercase, and finds all the matches in the string
//   const regex = /[AEIOU]/ig;

//   // Replace regexp matches with empty string
//   return string.replace(regex, '')
// }

// SOLUTION #3 - OBJECT + ADDITION ASSIGNMENT

function disemvowel(string) {
  // Create an object that will include all vowels to be checked against
  // value can also be null or undefined
  let vowels = {
    'a': true,
    'e': true,
    'i': true, 
    'o': true,
    'u': true
  };

  // Create an empty string that will act as our result value
  let result = '';

  // Loop through the inputted string
  // Convert the letter to lowercase to catch uppercase inputs
  // Check if the letter is inside of the object
  // If not, concatenate that letter onto result
  for (let i = 0; i < string.length; i++) {
    let letter = string[i].toLowerCase();

    if (!vowels[letter]) { // vowels['c']; // undefined
      // Use string[i], not letter bc we want the correct case
      result += string[i];
    }
  }

  // Return result
  return result;
}

/* =================================================================  
  TESTS
================================================================= */

console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'

/* =================================================================  
  NOTES
================================================================= */

/*
replace()
First param: match - regexp or string
Second param: replacement - string or function

--------------------------------------------------------------------
CHARACTER CLASS
[]

FLAGS
g
i

--------------------------------------------------------------------
OBJECTS

vowels['a']; // true
vowels['c']; // undefined

 */

/* =================================================================  
  TO DO
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/
