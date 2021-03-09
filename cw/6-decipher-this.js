/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
Decipher this!
https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript

You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:
- the second and the last letter is switched (e.g. Hello becomes Holle)
- the first letter is replaced by its character code (e.g. H becomes 72)

Note: there are no special characters used, only letters and spaces
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

function decipherThis(str) {
  // Split string into array of words
  const words = str.split(' ');
  console.log({ words });

  // Store deciphered sentence here
  let decipheredSentence = ''

  for (word of words) {
    // Use regex to get all number matches in word-string
    const numbers = word.match(/[0-9]/g);
    console.log({ numbers });
    // Join number-elements of array into a string
    const codepoint = numbers.join('');
    // Convert the codepoint-string to a letter
    const decipheredCodepoint = String.fromCodePoint(codepoint)
    console.log({ decipheredCodepoint })

    // Replace codepoint in word with letter
    const updatedWord = decipheredCodepoint + word.slice(codepoint.length)
    console.log({ updatedWord })

    // If the word is 1 letter
    if (updatedWord.length === 1) {
      decipheredSentence = decipheredSentence + decipheredCodepoint + ' '
    } 
    // If the word is 2 letters
    else if (updatedWord.length === 2) {
      const secondLetter = updatedWord.slice(-1)
      decipheredSentence = decipheredSentence + decipheredCodepoint + secondLetter + ' '
    } 
    // If the word is greater than 2 letters
    else {
      // The second letter should be the last letter
      const secondLetter = updatedWord.slice(-1)
      // The last letter should be the second letter
      const lastLetter = updatedWord.slice(1, 2)
      // The rest of the word is the third letter to the second-to-last letter
      const middleLetter = updatedWord.slice(2, -1)

      decipheredSentence = decipheredSentence + decipheredCodepoint + secondLetter + middleLetter + lastLetter + ' '
      console.log({ decipheredSentence })
    }
  }

  // Get rid of the space at the end of the last word
  return decipheredSentence.trimEnd()
}

/* =================================================================  
  TESTS
================================================================= */

console.log(
  decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')
);
// 'Have a go at this and see how you do'

/* =================================================================  
  NOTES
================================================================= */

/*
Strings are immutable

String to number
parseInt()

Array to string
join()

slice()

match() 
Regex
If we use global flag, it returns all matches.
This is a shortcut for us bc it implements iteration for us; it iterates through every letter in the string searching for a match.

String​.from​Code​Point()
Accepts number-strings as argument

--------------------------------------------------------------------
Check if a string is a number

Map
includes()
indexOf() / search()
test()
global isNaN()

--------------------------------------------------------------------
Tricky points

The first letter is the character code for 72. 
The second and last letter are switched.
In this case, technically the second letter of the word is 2, but we want that 2 to be part of the character code unit.
So one way around this is to convert the character code to a letter first

How do we keep number characters as one unit? 
For example, 7 and 2 should be 72.

We have to iterate through every word
We have to iterate through every letter in a word

What if the word has 2 or fewer letters? 
We need to switch second and last letter, but if there is only 1 letter in a word, there's nothing to switch.
If there's only 2 letters in a word, the second letter is the last letter.

The last word doesn't need a space at the end

--------------------------------------------------------------------
GOTCHAS

typeof Number.parseInt('87y') // number

Number.isNaN() is different from isNaN()
Number.isNaN('e'); // false
isNaN('e'); // true
 */

/* =================================================================  
  TO DO
================================================================= */

/*
Get rid of nested for loops
Solve this without using library functions
 */

/*
--------------------------------------------------------------------
*/

/* -------------------------------------------------------------- */
