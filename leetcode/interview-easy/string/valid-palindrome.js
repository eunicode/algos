/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
Valid Palindrome
https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/
https://leetcode.com/problems/valid-palindrome/

 */

/* =================================================================  
  PRE-NOTES
================================================================= */

/* 
ASSURANCES / OBSERVATIONS

--------------------------------------------------------------------
PLAN
Make everything lowercase
Ignore spaces, punctuation
Or only consider alphabet, numbers

EVEN
aman-nama
0 1 2 3 4 5 6 7
Middle = 3 & 4

ODD
he1eh
0 1 2 3 4
Middle = 2
*/

/* =================================================================  
  CODE
================================================================= */

/* eslint-disable */

var isPalindrome = function(s) {
  const lowercase = s.toLowerCase();
  // Strip string of any non-word character or underscore
  const alphanum = lowercase.replace(/\W|_/g, '');
  console.log({alphanum});
  
  let start = 0;
  let end = alphanum.length - 1;
  
  // Continue checking pairs until we reach the last pair.
  // If the string length is odd, there will be a middle character. 
  // But we don't need to check equivalency for the middle character.
  while (end > start) {
    // Check if first character matches last character
    // If not, it is not a palindrome
    if (alphanum.charAt(start) !== alphanum.charAt(end)) {
      return false;
    }
    
    // Check 0 & 4, then 1 & 3, then stop at 2 & 2
    start += 1;
    end -= 1;
  }
  
  return true;
};

/* =================================================================  
  TESTS
================================================================= */

console.log(isPalindrome('A man, a plan, a canal: Panama'));
// true

console.log(isPalindrome('race a car'));
// false

/* =================================================================  
  NOTES
================================================================= */

/*
REGEX
To delete matches, use replace(), and the `newvalue` should be an empty string.

/\W|_/g
\W = any character that's not alphabet, number or underscore
| = or

--------------------------------------------------------------------
You can use for loops or while loops with strings.
I didn't have to convert the string to an array.

--------------------------------------------------------------------
How to strip string of any character that's not an alphabet or number
Use Map with alphabet and number keys. 
Use codepoints - codePointAt() + fromCodePoint()
Use replace() + regex

charAt() - character at string index 

--------------------------------------------------------------------
How to check if string is the same forwards as it is backwards

Use mirrorReverse method I learned in Pramp - Sentence Reverse

Use three for loops. 
 */

/* =================================================================  
  TO DO
================================================================= */

/*
 */

/* =================================================================  
  SOLUTIONS
================================================================= */

/*
 */
 
/*
--------------------------------------------------------------------
*/

/* -------------------------------------------------------------- */