/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
Challenge: censor
https://csx.codesmith.io/units/closures/challenge-censor

Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. 
When two strings are given, the returned function will hold onto the two strings as a pair, for future use. 
When one string is given, the returned function will return the same string, except all instances of a first string (of a saved pair) will be replaced with the second string (of a saved pair).
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

function censor() {
  let store = [];
  let str = '';

  function inner(...args) {
    if (args.length === 1) {
      str = args[0];

      store.forEach( (pair) => {
        str = str.replace(pair[0], pair[1]);
      });

    } else if (args.length === 2) {
      store.push(args);
      return undefined;
    }

    return str;
  }

  return inner;
}

/* =================================================================  
  TESTS
================================================================= */

const changeScene = censor();

changeScene('dogs', 'cats');

changeScene('quick', 'slow');

console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'

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
