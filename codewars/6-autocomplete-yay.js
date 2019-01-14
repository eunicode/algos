/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
Autocomplete! Yay!
https://www.codewars.com/kata/5389864ec72ce03383000484/train/javascript

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

function autocomplete(input, dictionary) {
  const length = input.length;
  const matches = [];

  const inputStripped = input.match(/[A-Za-z]/g).join('');
  console.log({ inputStripped });
  
  for (const word of dictionary) {
    const part = word.slice(0, length);
    
    // const reg1 = /inputStripped/i;
    const reg1 = new RegExp(inputStripped, 'i');

    if (reg1.test(part)) {
      matches.push(word);
    }
  }

  console.log({ matches });
  return matches;
}

/* =================================================================  
  TESTS
================================================================= */

console.log(autocomplete('ai', ['airplane','airport','apple','ball']));

/* =================================================================  
  NOTES
================================================================= */

/*
for-of
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */

/* =================================================================  
  TO DO
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/
