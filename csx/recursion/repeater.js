/* =================================================================  
                          INSTRUCTIONS
================================================================= */

/*
INSTRUCTIONS

Write a function that takes an input character and returns that character repeated 5 times using recursion. 
For example, if the input is 'g', then the output should be 'ggggg'.

Input: {String} char
Output: {String}

--------------------------------------------------------------------
REQUIREMENTS

--------------------------------------------------------------------
GIVEN / ASSURANCES

 */

/* =================================================================  
                          PRE-NOTES
================================================================= */

/* 
OBSERVATIONS

--------------------------------------------------------------------
PLAN
*/

/* =================================================================  
                          CODE
================================================================= */

/* eslint-disable */

// FIRST ATTEMPT 

// function repeater(char) {
//   let str = "";

//   if (str.length === 5) {
//     return str;
//   }
  
//   else {
//     str += char;
//     repeater(str)
//   }
// }

// PROBLEM: maximum call stack size exceeded 

// MY ANALYSIS
// At the beginning of the function, I reset the value of `str` to empty string.
// I want `str` to snowball. 

/* -------------------------------------------------------------- */
// SECOND ATTEMPT 

// let str = "";

// function repeater(char) {
//   if (str.length === 5) {
//     return str;
//   }
  
//   else {
//     str += char;
//     return repeater(str)
//   }
// }

// PROBLEM: RangeError: Invalid string length

// MY ANALYSIS
// When in doubt, console log it out! 
// I was confused by my variables and their values. 
// `str` equals `char` here. The parameter is `char`, the argument is `str`. 
// Therefore `str` = `char`. 
// The problem was that `str` was g, g+g, then gg+gg, then gggg+gggg.
// It never becomes 5 g's, so the fxn never stops calling itself (stack overflow).

// `RETURN` KEYWORD
// Even if I don't add the `return` keyword before the recursive call, `str` will equal ggggg, 
// bc `str` is outside of the fxn, and we're concatenating to `str`. 
// But it's a good idea to add `return` if we're storing the return value of the function in a variable. 
// For example: 
// var x = repeater('g)
// `x` will be undefined, bc the first time we call repeater('g'), it returns nothing. 
// If I want `x` to equal 'ggggg', I need to return a function  
// var x = repeater('g') -> returns a function -> returns a function 
// -> returns a function -> returns a function -> returns a string 
// I call a function that returns a function that returns a string. 

/* -------------------------------------------------------------- */
// THIRD ATTEMPT 

// let str = "";

// function repeater(char) {
//   if (str.length === 5) {
//     console.log("It's 5!")
//     return str;
//   }
  
//   else {
//     str += char;
//     return repeater(char) // I call with `char`, instead of `str`. 
//   }
// }

// PROBLEM: repeater('g') returns ggggg, but repeater('j') does not return jjjjj,
// it returns ggggg

// MY ANALYSIS
// The problem is that I have an outside variable `str`. 
// It is supposed to store the value of all function calls. 
// I don't get jjjjj bc `str` is 5 characters, so nothing happens. 

/* -------------------------------------------------------------- */
// MY SOLUTION

function repeater(char, count = 0, str = "") {
	// base case
  if (count === 5) {
    return str;
  }
  
  str += char;
  count += 1;
  
  repeater(char, count, str)
}

// RETURN KEYWORD
// Even without the return keyword, `str` will equal ggggg. 
// But `repeater('g', 0, "")` will not return ggggg. 
// I'm guessing this is bc there are multiple function calls, but only the innermost
// function call returns a value. The outermost function call returns nothing.
// We need a return keyword for the evaluation chain to work.

/* =================================================================  
                          TESTS
================================================================= */

/* eslint-enable */

console.log(repeater('g'));
console.log(repeater('j'));

/* =================================================================  
                          NOTES
================================================================= */

/*
LESSONS LEARNED

We can add an extra parameter not included in given function call 
by using default parameters.
For example, the test case we're given is: repeater('g')
But we can define a function like so: repeater(char, count = 1)

We can think of recursion as 
- nested Russian dolls
- or a while loop

Aha! Russian dolls approach - it's like nested callback functions!
We have a function call, where the argument is a function call.
We evaluate the innermost function call, then we feed that value to the outermost function call.

 */

/* =================================================================  
                          TO DO
================================================================= */

/*
 */

/* =================================================================  
                          SOLUTIONS
================================================================= */

/* OTHERS' SOLUTION #1

Have a variable to keep track of count
Use factorial technique. 
We have the inmost nested egg (base case)
Once we unlock that, we can unlock the second-most nested egg
e.g. evaluate the return values of functions and work backwards 

repeater(g, 1) = g + repeater(g, 2) 
repeater(g, 2) = g + repeater(g, 3)
repeater(g, 3) = g + repeater(g, 4)
repeater(g, 4) = g + repeater(g, 5)
repeater(g, 5) = g

function repeater(char, num = 1) {
  if (num === 5) {
    return char;
  }  
  return char + repeater(char, num+1);
}

let x = repeater('g');
let y = repeater('j');

console.log({ x })
console.log({ y });

--------------------------------------------------------------------
OTHERS' SOLUTION #2

Use a while loop approach. 
We want to keep concatenating `char` until we hit base case.
Have an outside variable to keep track of count. 
Reset the outside variable to 0 after we hit base case. 

let count = 0;
let output = '';

function repeater(char, num) {
  if (count === 0) { 
    output = '' 
  };

  if (count === num) {
    count = 0;
    return output;
  };
  
  output += char;
  count++;

  return repeater(char, num);
}

console.log(repeater('g', 5));
console.log(repeater('j', 7));

 */

/*
--------------------------------------------------------------------
*/

/* -------------------------------------------------------------- */
