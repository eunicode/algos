/* =================================================================  
                          INSTRUCTIONS
================================================================= */

/*
INSTRUCTIONS

areFollowingPatterns
https://app.codesignal.com/interview-practice/task/3PcnSKuRkqzp8F6BN/description

Interview Practice > Hash Tables

tags: easy, hash table

--------------------------------------------------------------------
REQUIREMENTS

--------------------------------------------------------------------
ASSURANCES

 */

/* =================================================================  
                          PRE-NOTES
================================================================= */

/* 
OBSERVATIONS

--------------------------------------------------------------------
PLAN
*/

/* =================================================================  
                          CODE
================================================================= */

/* eslint-disable */

function areFollowingPatterns(strings, patterns) {
  // Create charsMap and wordsMap
  const htChar = new Map();
  const htWord = new Map();

  for (let i = 0; i < patterns.length; i++) {
    const chr = patterns[i];
    const word = strings[i];

    // Create charsMap by iterating chars array
    // If char key exists in charMap, check if charsMap[chars[i]] === words[i]
    // !!Basically, we're generating a word pattern from the chars array, 
    // and checking if the generated word pattern matches the words array
    if (!htChar.has(chr)) {
      htChar.set(chr, word);
    } else if (htChar.get(chr) !== word) {
      return false;
    }

    // Create wordsMap by iterating words array
    // If word key exists in wordsMap, check if wordsMap[words[i]] === chars[i]
    if (!htWord.has(word)) {
      htWord.set(word, chr);
    } else if (htWord.get(word) !== chr) {
      return false;
    }
  }

  console.log(htChar);
  console.log(htWord);

  return true;
}

/* =================================================================  
                          TESTS
================================================================= */

/* eslint-enable */

console.log(areFollowingPatterns(['cat', 'dog', 'dog'], ['a', 'b', 'b']));
// true

console.log(areFollowingPatterns(['cat', 'dog', 'doggy'], ['a', 'b', 'b']));
// false

console.log(areFollowingPatterns(['cat', 'dog', 'dog'], ['a', 'b', 'c']));
// false

/* =================================================================  
                          NOTES
================================================================= */

/*
METHOD #1

The checking is bi-directional
We can't only check if `chars` array matches words array. 
We must also check if `words` array matches chars array. 

[cat, dog, doggy] & [a, b, b]
We have duplicate `b`, but unique words
Creating a hash table with char keys filters duplicate chars.
{ a: cat,
  b: dog }

[cat, dog, dog] & [a, b, c]
We have duplicate `dog`, but unique characters
wordMap
{ cat: a
  dog: b }

We have two arrays, but they have the same length, so we can iterate both arrays 
at the same time. 
Iterate `chars` array, chars[i] // [a, b, b]
Check if `chars` array matches `words` array. // [cat, dog, doggy]
Is charsMap[chars[i]] === words[i]
charMap[b] !== doggy

Iterate `words` array // [cat, dog, dog]
Check if `words` array matches `chars` array // [a, b, c]
Is wordsMap[words[i]] === chars[i]
wordsMap[dog] !== c

--------------------------------------------------------------------
IF-ELSE / CONDITIONAL STRUCTURES

We can have multiple if-else statements:

if () {}
else {}

if () {}
else{}

--------------------------------------------------------------------

METHOD #2
Create a new pattern, check if `words` array matches that pattern. 
Then check if `chars` array matches that pattern. 
[cat, dog, dog] & [a, b, c]
[cat, dog, dog] = [0, 1, 1]
[a, b, c] = [0, 1, 2]
Are [0, 1, 1] and [0, 1, 2] equal?

[cat, dog, doggy] & [a, b, b]
[cat, dog, doggy] = [0, 1, 2]
[a, b, b] = [0, 1, 1]
Are [0, 1, 2] and [0, 1, 1] equal?
 */

/* =================================================================  
                          TO DO
================================================================= */

/*
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
