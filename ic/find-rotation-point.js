/* =================================================================  
                          INSTRUCTIONS
================================================================= */

/*
I opened up a dictionary to a page in the middle and started flipping through, looking for words I didn't know. I put each word I didn't know at increasing indices in a huge array I created in memory. When I reached the end of the dictionary, I started from the beginning and did the same thing until I reached the page I started at.

Now I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet. In other words, this is an alphabetically ordered array that has been "rotated." For example:

  const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary. This array is huge (there are lots of words I don't know) so we want to be efficient here.

To keep things simple, you can assume all words are lowercase.

TAGS: binarysearch_
 */

/* =================================================================  
                              CODE
================================================================= */

/* eslint-disabl e */

/* MY SOLUTION

*/

function findRotationPoint(words) {
  let start = 0;
  let end = words.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (words.length <= 1) {
      return 'Error: Need more than 1 element';
    }

    if (words.length === 2) {
      if (words[1] < words[0]) {
        return 1;
      }
    }

    // `target` is `mid`, and `target` is not first or last element
    if (words[mid - 1] > words[mid] && words[mid + 1] > words[mid]) {
      return mid;
    }

    // `target` is `mid`, and `target` is first or last element
    // `start === end` means we've searched entire array.
    if (start === end) {
      if (words[start] < words[0]) {
        return start;
      }
    }

    // `target` is greater than `mid`
    if (words[mid] > words[0]) {
      start = mid + 1;
    }

    // `target` is less than `mid`
    if (words[mid] < words[0]) {
      end = mid - 1;
    }
  }

  return 'Error: No rotation point exists';
}

/* ================================================================= */

/* SOLUTION - INTERVIEW CAKE
 */

function findRotationPointIC(words) {
  const firstWord = words[0];

  let floorIndex = 0;
  let ceilingIndex = words.length - 1;

  while (floorIndex < ceilingIndex) {
    // Guess a point halfway between floor and ceiling
    const guessIndex = Math.floor(floorIndex + (ceilingIndex - floorIndex) / 2);

    // If guess comes after first word or is the first word
    if (words[guessIndex] >= firstWord) {
      // Go right
      floorIndex = guessIndex;
    } else {
      // Go left
      ceilingIndex = guessIndex;
    }

    // If floor and ceiling have converged
    if (floorIndex + 1 === ceilingIndex) {
      // Between floor and ceiling is where we flipped to the beginning
      // so ceiling is alphabetically first
      break;
    }
  }

  return ceilingIndex;
}

/* =================================================================  
                              TESTS
================================================================= */

/* eslint-enable */

// TEST #1
let desc = 'small array';
let actual = findRotationPoint(['cape', 'cake']);
let expected = 1;
assertEquals(actual, expected, desc);

// TEST #2
desc = 'medium array';
actual = findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']);
expected = 4;
assertEquals(actual, expected, desc);

// TEST #3
desc = 'large array';
actual = findRotationPoint([
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage'
]);
expected = 5;
assertEquals(actual, expected, desc);

// TEST #4
desc = 'no rotation point';
actual = findRotationPoint(['a', 'b', 'c', 'd', 'e']);
console.log(desc, '...', actual);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

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

/* =================================================================  
                            DIVIDERS
================================================================= */

/*
--------------------------------------------------------------------
*/

/* -------------------------------------------------------------- */

/* ================================================================= */
