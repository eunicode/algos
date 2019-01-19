/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
Autocomplete! Yay!
https://www.codewars.com/kata/5389864ec72ce03383000484/train/javascript

 */

/* =================================================================  
  SOLUTIONS
================================================================= */

/*
Version #1
https://github.com/eunicode/algos/blob/2dab7799c06c74d20318fed5f8c41164101e2fa4/codewars/6-autocomplete-yay.js

 */

/* =================================================================  
  CODE
================================================================= */

/* eslint-disable */

function autocomplete(input, dictionary) {
  // Use length of `input` to determine indexEnd
  const length = input.length;

  // Store matches
  const matches = [];

  // Remove non-letter characters from `input`
  // match(/regex/g) returns array of letters
  // join('') joins the letter into a string
  const inputStripped = input.match(/[A-Za-z]/g).join('');
  console.log({ inputStripped });
  
  // Iterate through the array, if there is a match, push the word to `matches`
  for (const word of dictionary) {
    // Slice the word, bc we're only interested in matches at the beginning of the string
    const part = word.slice(0, length);
    
    // Create a regexp from a string
    const reg1 = new RegExp(inputStripped, 'i');

    // If a regexp match is found in the string, push string to `matches`
    if (reg1.test(part)) {
      matches.push(word);
    }
  }

  console.log({ matches });

  // Return first five matches
  return matches.slice(0, 5);
}

/* =================================================================  
  TESTS
================================================================= */

console.log(autocomplete('ai', ['airplane','airport','apple','ball']));

// TODO: Replace examples and use TDD development by writing your own tests

// These are some CW specific test methods available:
//    Test.expect(boolean, [optional] message)
//    Test.assertEquals(actual, expected, [optional] message)
//    Test.assertSimilar(actual, expected, [optional] message)
//    Test.assertNotEquals(actual, expected, [optional] message)

// NodeJS assert is also automatically required for you.
//    assert(true)
//    assert.strictEqual({a: 1}, {a: 1})
//    assert.deepEqual({a: [{b: 1}]}, {a: [{b: 1}]})

// You can also use Chai (http://chaijs.com/) by requiring it yourself
// var expect = require("chai").expect;
// var assert = require("chai").assert;
// require("chai").should();

// describe("Solution", function(){
//   it("should test for something", function(){
//     Test.assertEquals("actual", "expected", "This is just an example of how you can write your own TDD tests");
//   });
// });

/* =================================================================  
  NOTES
================================================================= */

/*
for-of
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

--------------------------------------------------------------------
HOW TO CREATE A REGEXP FROM A STRING

RegExp constructor

RegExp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#Description

new RegExp('ab+c', 'i');

--------------------------------------------------------------------
HOW TO LIMIT ARRAY TO FIVE ELEMENTS

Use slice() 
Note: slice() ends extraction BEFORE endIndex

Use if condition and indices. Access indices in for-of loop by using entries() and destructuring. 

http://2ality.com/2015/08/getting-started-es6.html#from-for-to-foreach-to-for-of

for (let [index, elem] of arr.entries()) {
    console.log(index+'. '+elem);
}

--------------------------------------------------------------------
SPREAD VS DESTRUCTURING

Spread unpacks all values in iterable (array, string) and object literals. 
Destructuring makes it easy to extract data from arrays and object literals, and assign them to variables. 

 */

/* =================================================================  
  TO DO
================================================================= */

/*
Write tests
 */

/*
--------------------------------------------------------------------
*/
