/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
String to Integer (atoi)
https://leetcode.com/problems/string-to-integer-atoi/

Medium
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

/*
REQUIREMENTS
- Get rid of whitespace in the front
- Check if first non-whitespace character is -/+/number
- Stop pushing if first non-whitespace character is not -/+/number
- Stop pushing if character after a number is not a number
- Convert number-string into a number
- Check if number is within the range 
- Return 0 if no valid conversion
- Return INT_MIN (−2^31) or INT_MAX (2^31 − 1)
*/

/* -------------------------------------------------------------- */
// REMOVE PRECEDING WHITE SPACE WITH SPLICE()

const myTrimStart = function(str) {
  const arr = [...str];
  let deleteCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (arr[i - deleteCount] === ' ') {
      if (/[0-9]/.test(arr[i - deleteCount - 1])) {
        // arr.splice(i - deleteCount, 1);
        // deleteCount += 1;
        console.log('Im the last preceding space');
        break;
      }

      console.log({ deleteCount });
      arr.splice(i - deleteCount, 1);
      deleteCount += 1;
    }
  }

  console.log({ arr });
};

/* -------------------------------------------------------------- */
// SOLUTION #1 - CONTROL FLOW

let myAtoi = function(str) {
  const nowhite = pluckNums(str);
  // console.log('value of nowhite in myAtoi: ', nowhite);

  if (nowhite === 0) {
    return 0;
  }

  // Convert string to number
  const num = Number.parseInt(nowhite);

  // If `num` is falsy, return 0. Edge case nowhite = ''
  if (!num) {
    return 0
  }

  // If number is bigger than INT_MAX, return INT_MAX
  if (num > 2 ** 31 - 1) {
    return 2147483647;
  }

  // If number is less than INT_MIN, return INT_MIN
  if (num < -(2 ** 31)) {
    return -2147483648;
  }

  // Otherwise, return number
  return num;
};

function pluckNums(str) {
  // Accumulator string of valid characters
  let nowhite = '';

  // Create a hashmap to test if letter is a number, bc searching hashmaps is O(1)
  // Note that keys are strings
  const nums = new Map([
    ['0', null],
    ['1', null],
    ['2', null],
    ['3', null],
    ['4', null],
    ['5', null],
    ['6', null],
    ['7', null],
    ['8', null],
    ['9', null]
  ]);
  // console.log({ nums });

  for (let i = 0; i < str.length; i++) {
    // console.log({ i });
    // console.log({ nowhite }); // Check updated value of accumulator string

    // Check if first non-whitespace letter is valid:
    // If element is not a space, then...
    if (str[i] !== ' ') {
      // console.log('Numbers will pass this test')

      // If element is not a minus/plus/number, and accumulator string is empty, return invalid
      if (
        str[i] !== '-' &&
        str[i] !== '+' &&
        !nums.has(str[i]) &&
        nowhite === ''
      ) {
        console.log('not -/+/0-9, and acc = ""');
        return 0;
      }
    }

    // console.log('check if following if-statements get checked if first if-statement is fulfilled. (They do)')

    // If letter is a minus or plus, 
    // and succeeding letter is not a number,
    // and letter is not the last letter (this is to fulfill edge case '-5-')
    // return 0
    if (str[i] === '-' || str[i] === '+') {
      if (!nums.has(str[i + 1]) && i !== str.length - 1) {
        console.log('-/+ at the end, return 0');
        return 0;
      }
    }

    // If element is not a number, and prev element IS a number, break loop
    if (!nums.has(str[i]) && nums.has(str[i - 1])) {
      break;
    }

    // If letter is a -, and succeeding letter is a number, "push" it
    if (str[i] === '-' && nums.has(str[i + 1])) {
      nowhite += str[i];
    }
    // If letter is a +, and succeeding letter is a number, "push it"
    if (str[i] === '+' && nums.has(str[i + 1])) {
      nowhite += str[i];
    }

    // If letter is a number...
    if (nums.has(str[i])) {
      // If preceding letter DNE
      if (i === 0) {
        nowhite += str[i];
        console.log('number + first letter');
      }

      // If preceding letter is a minus or plus, push it
      if (str[i - 1] === '-' || str[i - 1] === '+') {
        nowhite += str[i];
      }
      // If preceding letter is a space, push it
      if (str[i - 1] === ' ') {
        nowhite += str[i];
      }

      // If preceding letter is a number and succeeding letter is a number
      if (nums.has(str[i - 1]) && nums.has(str[i + 1])) {
        nowhite += str[i];
      }

      // If preceding letter is a number, and succeeding letter is NOT a number, BREAK
      if (nums.has(str[i - 1]) && !nums.has(str[i + 1])) {
        nowhite += str[i];
        break;
      }
    }
  }

  console.log('nowhite at the end: ', nowhite);

  return nowhite;
}

/* =================================================================  
  TESTS
================================================================= */

// Spaces
console.log(myAtoi('      42  ')); // 42

// Decimals
console.log(myAtoi('3.14159')); // 3

// Plus
console.log(myAtoi('+1')); // 1

// First non-whitespace character is not plus/minus/number
console.log(myAtoi('+-2')); // 0

// Trailing invalid letter is at the end of the string
console.log(myAtoi('-5-')); // -5

console.log(myAtoi('')) // 0

console.log(myAtoi('-91283472332')) // -2147483648

// Input: "4193 with words"
// Output: 4193

// Input: "words and 987"
// Output: 0

/* =================================================================  
  NOTES
================================================================= */

/*
It's better to push letters that pass the test into a new variable than to delete 
unwanted letters. 
This is bc we're iterating something that we're also mutating. 
Let's say i = 1, and we want to delete element at index 1 in the original string. 
But since we deleted element at index 0 in the original string, 
element at index 1 in mutated string is element at index 2 in original string. 
Or element at index 1 in the original string is now index 0 in the mutated string.
We get around this by iterating the original string and by modifying the index. 
i = 1, but we want to delete element at index 0. 
We have a deletedElements counter, and we use that to modify i. 
i - deletedElements. 

It's also better to push letters that pass the test into a new variable bc we 
want to disregard any letters after "middle" spaces.
It's easier to find letters that pass to push, than find letters that fail to delete 
bc there are many ways letters can fail, and less ways to pass, so it's easier 
to write tests to find letters that pass.

--------------------------------------------------------------------
LESSONS

Read the directions carefully. 
It says that the first non-whitespace character may be a plus or minus sign.
I only thought about the minus sign bc I just looked at the examples. 
 
Think of edge cases carefully. 
What if we're on the first character?
What if we're on the last character?
 */

/* =================================================================  
  TO DO
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/
