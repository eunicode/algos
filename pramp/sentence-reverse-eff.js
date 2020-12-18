/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
Sentence Reverse
https://www.pramp.com/challenge/VKdqbrq6B1S5XAyGAOn4

Input: 
["p","e","r","f","e","c","t"," ","m","a","k","e","s"," ","p","r","a","c","t","i","c","e"]
// ))

Output: 
["p","r","a","c","t","i","c","e"," ","m","a","k","e","s"," ","p","e","r","f","e","c","t"]

A more elegant and efficient approach is to reverse all the characters in `arr`, and then reverse the characters in each word separately. 
While the first reverse gives us the _words_ in the reverse order as we wanted, it also reverses the _characters_ of each word. 
To fix that, we do the second reverse, which reverses each word separately.

Reversing items in an array is done by a ‘mirror’ function, that swaps the items of every 2 indices with the same distance from the middle.

Time Complexity: traversing the array twice with a constant number of actions for each item is linear O(N).

Space Complexity: using iteration indices, and one temp variable, takes constant O(1) memory.

If you have time left, ask your peer how the mirrorReverse function could be implemented with a single index. 
It’s done with left to right linear iteration, and swapping arr[i] and arr[n-1-i] as long as i < n-1-i.

TAGS: in-place_
*/

/* =================================================================  
  PSEUDOCODE / python?
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
    // If we hit a space
    if (arr[i] == ' ') {
      // And the space is after a non-space character
      if (wordStart != null) {
        // reverse the word from wordStart to the index before the space
        mirrorReverse(arr, wordStart, i - 1);
        // Reset wordStart to null, so that the next character's index will be set to wordStart
        wordStart = null;
      }
    } 

    // If we're at the last character in the array
    else if (i == len - 1) {
      // wordStart can be null if we have this: b__ -> __b -> __b (nothing happens) 
      if (wordStart != null) {
        mirrorReverse(arr, wordStart, i);
      }
    } 

    // If we haven't set wordStart, we will set it to our current index
    else if (wordStart == null) {
        wordStart = i;
      }

    // The remaining option is wordStart is set. If wordStart is set, it remains the same value, until it is set to null, and we re-set it.   
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

console.log(reverseWords(["a", " ", " "]))
/* =================================================================  
  NOTES
================================================================= */

/*
Where are the arrays being stored? 

// Helper function - reverses the order of items in arr
function mirrorReverse(arr, start, end) {
  // reverse array

  return arr;
}

function reverseWords(arr) {
  mirrorReverse(arr, 0, len - 1);

  // Reverse each word
  
  return arr;
}

mirrorReverse() mutates the given array in-place. 
See also: parameters as storage
Then we continue mutating the array in reverseWords().
These two functions have access to the same parameter. 
This is bc we passed `arr` when we called mirrorReverse(). 
This is why we have constant O(1) memory.
The only new variables are the iteration indices (start, end), and the `temp` variable. 

QUESTION
I thought with functional programming we're not supposed to mutate arguments?

 */

/* =================================================================  
  TO DO
================================================================= */

/*
Rewrite this with destructuring
 */

/*
--------------------------------------------------------------------
*/
