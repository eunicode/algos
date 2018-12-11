/* =================================================================  
  INSTRUCTIONS
================================================================= */

/* 
Decrypt Message
https://www.pramp.com/challenge/8noLWxLP6JUZJ2bA2rnx

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

function decrypt(word) {
  // Turn input string into array of letters
  const lettersArr = word.split('');
  // console.log({ lettersArr });

  // Turn letters into codepoints
  const asciiArr = lettersArr.map(chr => chr.charCodeAt(0));
  console.log({ asciiArr }); // [ 100, 110, 111, 116, 113 ]

  // Container to store decrypted letters
  const decryptedArr = [];

  // Keep track of previous number. This needs to be outside the for loop
  let prevStep2 = asciiArr[0];
  // Other variables that need to be updated
  let currStep2 = 0;
  let currStep1 = 0;
  let decryptedChar = '';

  asciiArr.forEach((currStep3, idx) => {
    // Decrypt first number by subtracting 1: x - 1
    if (idx === 0) {
      const firstStep1 = String.fromCharCode(asciiArr[0] - 1);
      decryptedArr.push(firstStep1);
    } else {
      // currStep2 = currStep3 + 26x, so set currStep2 equal to currStep 3 initially 
      currStep2 = currStep3;

      // currStep2 = prevStep2 + currStep1
      // currStep1 can be in the range of 97-122 (a-z)
      // Therefore, the limit must be prevStep2 + 122
      let limit = prevStep2 + 122;
      
      // Find currStep2
      // currStep2 = currStep3 + 26x
      // currStep2 is initially equal to currStep3
      // So we can do currStep2 = currStep2 + 26
      while (currStep2 <= limit - 26) { // Subtract 26 bc for the last true condition, we will add 26
        currStep2 += 26;
      }
      console.log({ currStep2 });

      // Find currStep1, the decrypted codepoint
      currStep1 = currStep2 - prevStep2;

      // Get the letter from the decrypted codepoint and push
      decryptedChar = String.fromCharCode(currStep1);
      decryptedArr.push(decryptedChar);

      // Update prevStep2
      prevStep2 = currStep2;
    }
  });

  console.log({ decryptedArr });
  return decryptedArr.join('');
}

/* =================================================================  
  TESTS
================================================================= */

// Test Case #1
// console.log(decrypt('dnotq'));
// output: "crime"

// Test Case #2
console.log(decrypt('flgxswdliefy'));
// Expected: "encyclopedia"

// Test Case #3
// console.log(decrypt('rajsb'));
// Expected: "qqqqq"

// Test Case #4
// console.log(decrypt('bvqmjhgghjmqvbiqzjugthwmdv'));
// Expected: "abcdefghijklmnopqrstuvwxyz"

// Test Case #5
// console.log(decrypt('eobamwpnlmhklrq'));
// Expected: "drugtrafficking"

// Test Case #6
// console.log(decrypt(''));
// Expected: ""

/* =================================================================  
  NOTES
================================================================= */

/*
Progression
currStep3 -> currStep2 -> currStep1

EUREKA MOMENT
currStep2 = currStep3 + 26x

TWO IMPORTANT EQUATIONS
currStep2 = currStep3 + 26x
currStep2 = prevStep2 + currStep1

y = 110 + 26x
y = 100 + o
y = 100 + (97 to 122)
Three unknowns, three equations

TWO UNKNOWNS
currStep2 (y)
currStep1 (o)

KNOWNS
currStep3
prevStep2

SUBSTITUTION
We know that currStep1 will be a value from 97-122. 
Why? Because it is given that the input will always be lower cased latin letters.
currStep2 = prevStep2 + (97-122)
This means we know the limit for currStep2. 

LIMIT
The maximum currStep2 can be is prevStep2 + 122
Since we know the limit, we can use a while loop. 
 */

/* =================================================================  
  TO DO
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/
