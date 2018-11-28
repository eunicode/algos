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
 */

/* =================================================================  
  CODE
================================================================= */

function reverseWords(arr) {
  // Join array into a string
  const str = arr.join('');
  console.log('str: ', str);

  // Split string into arrays
  const splitArr = str.split(' ');
  console.log('splitArr: ', splitArr);

  // Clone and reverse array
  // `reverse()` is a mutator method
  const splitClone = [...splitArr];
  console.log('splitClone: ', splitClone);
  const reverse = splitClone.reverse();
  console.log('reverse: ', reverse);

  //
  let container = [];

  // Split words into letters
  reverse.forEach(elm => {
    if (elm === '') {
      // container.push([' ']);
      console.log('elm1: ', elm);
      container = container.concat(' ');
    } else {
      console.log('elm2: ', elm);
      const letters = elm.split('');
      // container.push(letters);
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

/* eslint-disable */

console.log(
  reverseWords([
    'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
    'm', 'a', 'k', 'e', 's', '  ',
    'p', 'r', 'a', 'c', 't', 'i', 'c', 'e'
  ])
);

/* Expected
output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
          'm', 'a', 'k', 'e', 's', '  ',
          'p', 'e', 'r', 'f', 'e', 'c', 't' ]
*/

// console.log(reverseWords([" "," "]));
/* Expected: 
[" "," "]
*/

// console.log(reverseWords(["a"," "," ","b"]));
/* Expected:
["b"," "," ","a"]
*/

// console.log(reverseWords(["h","e","l","l","o"]));
/* Expected:  
["h","e","l","l","o"]
*/

// console.log(reverseWords(
//     ["p","e","r","f","e","c","t"," ",
//     "m","a","k","e","s"," ",
//     "p","r","a","c","t","i","c","e"])
// );

/* Expected:
["p","r","a","c","t","i","c","e"," ","m","a","k","e","s"," ","p","e","r","f","e","c","t"]
*/

// console.log(reverseWords(
// ["y","o","u"," ","w","i","t","h"," ","b","e"," ","f","o","r","c","e"," ","t","h","e"," ","m","a","y"])
// );

/* Expected:
["m","a","y"," ","t","h","e"," ","f","o","r","c","e"," ","b","e"," ","w","i","t","h"," ","y","o","u"]
*/

// console.log(reverseWords(
//     ["g","r","e","a","t","e","s","t"," ","n","a","m","e"," ","f","i","r","s","t"," ","e","v","e","r"," ","n","a","m","e"," ","l","a","s","t"])
// );

/* Expected:
["l","a","s","t"," ","n","a","m","e"," ","e","v","e","r"," ","f","i","r","s","t"," ","n","a","m","e"," ","g","r","e","a","t","e","s","t"]
*/

/* =================================================================  
  NOTES
================================================================= */

/* 
Why aren't semicolons allowed in console.log()?
*/

/* =================================================================  
  TO DO
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/
