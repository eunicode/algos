/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
771. Jewels and Stones
https://leetcode.com/problems/jewels-and-stones/

 */

/* =================================================================  
  SOLUTIONS
================================================================= */

/*
SOLUTION #1 - REGEX

SOLUTION #2 - 
 */

/* =================================================================  
  CODE
================================================================= */

/* eslint-disable */

var numJewelsInStones = function(J, S) {
  // Create array of characters using spread syntax
  const jewel = [...J];
  // console.log({ jewel });

  let count = 0;

  // Check for `J` letter matches in `S` string
  jewel.forEach( elm => {
    // Use constructor to create a RegExp object bc regex pattern will be changing 
    const rex = new RegExp(elm, 'g'); // `g` flag
    console.log('rex: ', rex);

    // Return array of matches
    const matchArr = S.match(rex);

    // Execute code block if matches exist
    if (matchArr) {
      // Get number of matches
      matchCount = matchArr.length;
      console.log({ matchCount });
      // Increment count
      count += matchCount;
    }
  });

  return count;
};

/* =================================================================  
  TESTS
================================================================= */

console.log(numJewelsInStones('aA', 'aAAbbbb'));
// 3

// console.log(numJewelsInStones('z', 'ZZ'))
// 0

/* =================================================================  
  NOTES
================================================================= */

/*
EDGE CASE
What if there are no matches? 
const matchArr = S.match(rex); // null 
const matchLength = matchArr.length; // null.length
count += match;

--------------------------------------------------------------------
HOW TO USE VARIABLE IN A REGULAR EXPRESSION

How do you use a variable in a regular expression?
https://stackoverflow.com/questions/494035/how-do-you-use-a-variable-in-a-regular-expression

How to put variable in regular expression match?
https://stackoverflow.com/questions/7053506/how-to-put-variable-in-regular-expression-match

How to use variables inside Regular Expression in Javascript
https://stackoverflow.com/questions/5916833/how-to-use-variables-inside-regular-expression-in-javascript

--------------------------------------------------------------------
RegExp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

Constructor

String
new RegExp('ab+c', 'i');

Regex
new RegExp(/ab+c/, 'i');

--------------------------------------------------------------------
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

Need `g` flag to get all the matches

If there are no matches, `null` is returned.

 */

/* =================================================================  
  TO DO
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/
