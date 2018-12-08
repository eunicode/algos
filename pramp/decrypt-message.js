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

/* eslint-disabl e */

/* Plan: We need to go from step2 to step1. 
We get to step2 by step3. 
110 -> 214 -> 114
111 -> 319 -> 105
We can go from step3 to step2 bc we know that step2 is step3-26x.
The limit for step2 is prevStep2 + step3 (100 + 110 or 111 + 214)
Or it could be step3 + 122x. 122 is z.  
*/
function decrypt(word) {
  // Turn input into array
  const lettersArr = word.split('');
  console.log({ lettersArr });

  // Turn letters into codepoints
  const asciiArr = lettersArr.map(chr => chr.charCodeAt(0));
  console.log({ asciiArr }); // [ 100, 110, 111, 116, 113 ]

  // Store decrypted letters
  const decryptArr = [];

  // Keep track of previous number. This needs to be outside the for loop
  let cdptStep2 = asciiArr[0];

  asciiArr.forEach((cdpt, idx) => {
    // Decrypt first number by subtracting 1: x - 1
    if (idx === 0) {
      const first = String.fromCharCode(asciiArr[0] - 1);
      decryptArr.push(first);
    } else if (idx === 1) {
      const step2lim = cdpt + cdptStep2; // 210
      console.log({ step2lim });

      // Clone current elm
      let cdptCopy = cdpt; // 110

      // Find cdptStep2, which is 214.
      // We know 110 + 26x = 214.
      // We know cdptStep2 is 100 + 114. We know a-z is 97-122. so the limit is 100 + 122
      while (cdptCopy < step2lim) {
        cdptCopy += 26;
      }

      console.log({ cdptCopy }); // 214

      const decryptNum = cdptCopy - cdptStep2; // 214-100 = 114 or 'r'
      // let decryptNum = cdpt - asciiArr[idx - 1];
      decryptArr.push(String.fromCharCode(decryptNum));
      // Update previous number
      cdptStep2 = cdptCopy; // 214
      console.log({ cdptStep2 });
    }

    // Decrypt other numbers by doing currentTotal - previousTotal
    else {
      // Limit is current elm + previous elm
      const step2lim = cdpt + cdptStep2; // 210
      console.log({ step2lim });

      // Clone current elm
      let cdptCopy = cdpt; // 110

      // Find cdptStep2, which is 214.
      // We know 110 + 26x = 214.
      // We know cdptStep2 is 100 + 114. We know a-z is 97-122. so the limit is 100 + 122
      while (cdptCopy < step2lim - 26) {
        cdptCopy += 26;
      }

      console.log({ cdptCopy }); // 214

      const decryptNum = cdptCopy - cdptStep2; // 214-100 = 114 or 'r'
      // let decryptNum = cdpt - asciiArr[idx - 1];
      decryptArr.push(String.fromCharCode(decryptNum));
      // Update previous number
      cdptStep2 = cdptCopy; // 214
      console.log({ cdptStep2 });
    }
  });

  console.log({ decryptArr });
  return decryptArr.join('');
}

/* =================================================================  
  TESTS
================================================================= */

// Test Case #1
console.log(decrypt('dnotq'));
// output: "crime"

// Test Case #2
// console.log(decrypt('flgxswdliefy'));
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
