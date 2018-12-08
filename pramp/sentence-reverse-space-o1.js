/* =================================================================  
  PSEUDOCODE
================================================================= */

/* 

function reverseWords(arr):
    # reverse all characters:
    n = arr.length
    mirrorReverse(arr, 0, n-1)

    # reverse each word:
    wordStart = null
    for i from 0 to n-1:
        if (arr[i] == ' '):
            if (wordStart != null):
                mirrorReverse(arr, wordStart, i-1)
                wordStart = null
        else if (i == n-1):
            if (wordStart != null):
                mirrorReverse(arr, wordStart, i)
        else:
            if (wordStart == null):
                wordStart = i

    return arr


# helper function - reverses the order of items in arr
# please note that this is language dependent:
# if are arrays sent by value, reversing should be done in place

function mirrorReverse(arr, start, end):
    tmp = null
    while (start < end):
        tmp = arr[start]
        arr[start] = arr[end]
        arr[end] = tmp
        start++
        end--

*/

/* =================================================================  
  CODE
================================================================= */

/* eslint-disable */

// Helper function - reverses the order of items in arr
// Swaps the items of every 2 indices with the same distance from the middle
function mirrorReverse(arr, start, end) {
  let temp = null;

  while (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }

  // console.log({ arr });
  /* [ 'e','c','i','t','c','a','r','p', ' ',
  's','e','k','a','m',' ', 
  't','c','e','f','r','e','p' ] */
  return arr;
}

function reverseWords(arr) {
  // Reverse all characters
  const len = arr.length; // 22 // console.log({ len });
  mirrorReverse(arr, 0, len - 1);

  // Reverse each word
  let wordStart = null;

  for (let i = 0; i < len; i++) {
    if (arr[i] == ' ') {
      if (wordStart != null) {
        mirrorReverse(arr, wordStart, i - 1);
        wordStart = null;
      }
    } else if (i == len - 1) {
      if (wordStart != null) {
        mirrorReverse(arr, wordStart, i);
      }
    } else if (wordStart == null) {
        wordStart = i;
      }
  }

  return arr;
}

/* =================================================================  
  TESTS
================================================================= */

// Test Case #1
// console.log(reverseWords([" "," "]));

/* Expected: 
[" "," "]
*/

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

/* eslint-disable */
// Test Case #4
console.log(reverseWords(
  ["p","e","r","f","e","c","t"," ","m","a","k","e","s"," ","p","r","a","c","t","i","c","e"]
));

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
  NOTES
================================================================= */

/*
Where are the arrays being stored? 

 */

/* =================================================================  
  TO DO
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/
