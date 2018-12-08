/* =================================================================  
  INSTRUCTIONS
================================================================= */

/* 
Sentence Reverse
https://www.pramp.com/challenge/VKdqbrq6B1S5XAyGAOn4

You are given an array of characters arr that consists of sequences of characters separated by space characters. 
Each space-delimited sequence of characters defines a word.

Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

Explain your solution and analyze its time and space complexities.

*/

/* =================================================================  
  SOLUTIONS
================================================================= */

/*
Stage 1
https://github.com/eunicode/algos/blob/f10e20752c1fdad233161a3042314d4152001edb/pramp/sentence-reverse.js

This was actually not a solution. It only worked bc the space unit had two spaces in it.
['p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
'm', 'a', 'k', 'e', 's', '  ',
'p', 'r', 'a', 'c', 't', 'i', 'c', 'e'
]

Stage 2
https://github.com/eunicode/algos/blob/bd6e8efcc0a29bf60ff83a9f49ff0234131977b8/pramp/sentence-reverse-notes.js

split() + regex + capturing groups

*/

/* =================================================================  
  CODE
================================================================= */

/* eslint-disable */

function reverseWords(arr) {
  // Join array into a string
  const str = arr.join('');
  console.log('str: ', str);

  // Split string into arrays
  // const splitArr = str.split(' '); // This doesn't work properly for more than two spaces in a row!
  const splitArr = str.split(/(\s+)/); // Capturing group is necessary for spaces to be preserved
  console.log('splitArr: ', splitArr);

  // Clone and reverse array. reverse()` is a mutator method
  const splitClone = [...splitArr];
  // console.log('splitClone: ', splitClone);
  const reverse = splitClone.reverse();
  // console.log('reverse: ', reverse);

  // Store new array
  let container = [];

  // Split words into letters. 
  reverse.forEach(elm => {
    if (elm !== '') { 
      // When using split(), remember every character is couched between empty strings. 
      // So `" "` is `[emptystr, space, emptystr]`
      // We don't need to do anything to empty string elements
      console.log('elm2: ', elm);
      const letters = elm.split('');
      console.log({ letters });
      container = container.concat(letters);
    }
  });

  // console.log({ container });
  // console.log(container);
  return container;
}

/* =================================================================  
  TESTS
================================================================= */

// Test Case #1
console.log(reverseWords([" "," "]));

/* Expected: 
[" "," "]

str = '  ';
const splitArr = str.split(/(\s+)/); // [ '', '  ', '' ]
string = emptystr / space emptystr space / emptystr

*/

// Test Case #1.2
// console.log(reverseWords([" ", "", " "]));

// Test Case #2
// console.log(reverseWords(["a"," "," ","b"]));

/* Expected:
["b"," "," ","a"]
*/

// Test Case #3
// console.log(reverseWords(["h","e","l","l","o"]));

/* Expected:  
["h","e","l","l","o"]
*/

// Test Case #4
// console.log(reverseWords(
// ["p","e","r","f","e","c","t"," ","m","a","k","e","s"," ","p","r","a","c","t","i","c","e"]
// ))

/* Expected:
["p","r","a","c","t","i","c","e"," ","m","a","k","e","s"," ","p","e","r","f","e","c","t"]
*/

// Test Case #5
// console.log(reverseWords(
// ["y","o","u"," ","w","i","t","h"," ","b","e"," ","f","o","r","c","e"," ","t","h","e"," ","m","a","y"])
// );

/* Expected:
["m","a","y"," ","t","h","e"," ","f","o","r","c","e"," ","b","e"," ","w","i","t","h"," ","y","o","u"]
*/

// Test Case #6
// console.log(reverseWords(
//     ["g","r","e","a","t","e","s","t"," ","n","a","m","e"," ","f","i","r","s","t"," ","e","v","e","r"," ","n","a","m","e"," ","l","a","s","t"])
// );

/* Expected:
["l","a","s","t"," ","n","a","m","e"," ","e","v","e","r"," ","f","i","r","s","t"," ","n","a","m","e"," ","g","r","e","a","t","e","s","t"]
*/

/* =================================================================  
  TO DO
================================================================= */

/*
Will the thing separating the words always be one space? 
const splitArr = str.split(/(\s+)/); 
 */

/*
--------------------------------------------------------------------
*/
