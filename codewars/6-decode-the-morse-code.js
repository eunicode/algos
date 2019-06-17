/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
Decode the Morse code
https://www.codewars.com/kata/decode-the-morse-code/train/javascript

Extra spaces before or after the code have no meaning and should be ignored.

The Morse code table is preloaded for you as a dictionary

SOS = '···−−−···'

TAGS: string

 */

/* =================================================================  
  PRE-NOTES
================================================================= */

/* 
ASSURANCES / OBSERVATIONS

Morse code table
Case-insensitive
single space = separating characters
3 spaces = separating words
SOS

--------------------------------------------------------------------
PLAN
*/

/* =================================================================  
  CODE
================================================================= */

/* eslint-disable */

const MORSE_CODE = {
  '-.-.--': '!',
  '.-..-.': '"',
  '...-..-': '$',
  '.-...': '&',
  '.----.': "'",
  '-.--.': '(',
  '-.--.-': ')',
  '.-.-.': '+',
  '--..--': ',',
  '-....-': '-',
  '.-.-.-': '.',
  '-..-.': '/',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '..--..': '?',
  '.--.-.': '@',
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '..--.-': '_',
  '...---...': 'SOS'
};

const decodeMorse = function(morseCode) {
  // console.log({ morseCode });
  // console.log(MORSE_CODE);

  let chr = '';
  let sentence = '';
  let spaceCount = 0;

  if (morseCode === '···−−−···') {
    return 'SOS';
  }

  // Iterate string
  for (let i = 0; i < morseCode.length; i++) {
    // 3 cases: element is space, letter, or the last letter

    // #1. If letter is a space
    if (morseCode[i] === ' ') {
      spaceCount += 1;

      // Add space to sentence if there are 3 or more consecutive spaces
      if (spaceCount >= 3 && sentence !== '') {
        sentence += ' ';
        spaceCount = 0;
      }

      // If there's 1 space, convert code into letter
      if (spaceCount === 1) {
        if (MORSE_CODE[chr]) {
          // Convert character and add to sentence
          sentence += MORSE_CODE[chr];
          chr = '';
        }
      }
    } 
    
    // #2. If letter is last letter
    else if (i === morseCode.length - 1) {
      chr += morseCode[i];
      sentence += MORSE_CODE[chr];
    } 
    
    // #3. If element is letter
    else {
      chr += morseCode[i];
      spaceCount = 0;
    }
  }

  // console.log({ sentence });
  return sentence.trimEnd();
};

/* =================================================================  
  TESTS
================================================================= */

// console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
// 'HEY JUDE'

if (decodeMorse('  .... . -.--    .--- ..- -.. .   ') === 'HEY JUDE') {
  console.log('trailing spaces check')
} else {
  console.log('fail')
}

/* =================================================================  
  NOTES
================================================================= */

/*
Why does it not work if I have if + if, but it works if I have if + else if?

We add a space to the string every time we have 3 consecutive spaces.
However, what if we have 6 consecutive spaces and we only want 1 space added to 
the string? 
Also, what if we have leading spaces?
What if we have trailing spaces? 

If we have leading spaces, we can prevent adding spaces to the string with the 
condition `if (string is empty)`.

But how do we prevent trailing spaces from being added to the string?
 */

/* =================================================================  
  TO DO
================================================================= */

/*
Make this more concise
Solve without trimEnd()
Separate each task into its own function
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
