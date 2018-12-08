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

/* Plan: We need to go from step2 to step1. 
We get to step2 by step3. 
110 -> 214 -> 114
111 -> 319 -> 105
We can go from step3 to step2 bc we know that step2 is step3-26x.
The limit for step2 is prevStep2 + step3 (100 + 110 or 111 + 214)
Or it could be step3 + 122x. 122 is z.  
*/
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
 */

/* =================================================================  
  TO DO
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/
