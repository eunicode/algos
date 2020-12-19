/* =================================================================  
                          INSTRUCTIONS
================================================================= */

/*
Function Cache
https://www.codewars.com/kata/525481903700c1a1ff0000e1/train/javascript

If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.

Usage example:

var complexFunction = function(arg1, arg2) { // complex calculation in here };
var cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar'); // complex function should be executed
cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments

TAGS: closure_, memoization_, recursion_

INCOMPLETE
 */

/* =================================================================  
                              CODE
================================================================= */

/* eslint-disable */

/*
 */
// SOLUTION - WORKS IF ARGUMENTS ARE NUMBERS/STRINGS
// Turn arguments into a single string
// Add arg-string as key in a store-object (closure)
// If arg-string exists store-object, return value
// If it doesn't, call the function and add the value to store-object
// function cache(func) {
//   let store = {};

//   return function(...input) {
//     // console.log(func.toString());
//     console.log('inputs: ', ...input);

//     let key = '';

//     for (arg of input) {
//       if (typeof arg === 'number') {
//         key += arg.toString();
//       }
//       if (typeof arg === 'string') {
//         key += arg;
//       }
//     }

//     if (store[key]) {
//       console.log('store, key exists: ', store);
//       return store[key];
//     } else {
//       let value = func(...input);
//       store[key] = value;
//       console.log('store: ', store);
//       return value;
//     }
//   };
// }

/* -------------------------------------------------------------- */
/* 
SOLUTION - works if arguments are arrays, objects, primitives
With a helper function, stringify(), turn arguments into a single string. 
stringify() is recursive, so it works with nested objects/arrays. 
Use the string as a key. 
If the key exists in the dictionary, return value.
If the key doesn't exist, add key-value property to dictionary. 
Return the value.
*/

function cache(func) {
  // `store` will be a private variable, only accessible to the returned function via closure
  const store = {};

  return function(...args) {
    // pack arguments into `args` array
    // This string will hold all the arguments
    let keybuilder = '';

    // Iterate `args` array
    for (const elm of args) {
      // If element is an array/object, turn it into a string with stringify()
      if (typeof elm === 'object') {
        keybuilder += stringify(elm);
      }
      // If element is a primitive, concatenate it to the string builder
      else {
        keybuilder += elm;
      }
    }

    // We must use `key in obj` syntax, bc we could have `foo:undefined` property,
    // and we wouldn't be able to distinguish btw `undefined` from key that doesn't exist,
    // and `undefined` as a value returned from a key
    if (keybuilder in store) {
      return store[keybuilder];
    }
    store[keybuilder] = func(...args); // spread syntax

    return store[keybuilder];
  };
}

// Helper function
/* This is a recursive function, so it can handle nested arrays and nested objects. 
We will turn an object into a string. 
 */
function stringify(obj) {
  // This variable will hold the entire stringified input
  let key = '';

  // If the input is an array
  if (Array.isArray(obj)) {
    key += 'A'; // Add 'A' to `key` to signify the object is an array
    // Iterate the array
    for (const elm of obj) {
      // This variable will hold the stringified array
      const item = 
        // If the element is an object, make a recursive call
        typeof elm === 'object' 
          ? stringify(elm)
          : // If the element is a primitive, we don't need to do anything special
            `${elm}`;

      // Concatenate the stringified array to the stringbuilder
      key += item;
    }
  }
  // If the input is an object
  else {
    key += 'O';
    // Traverse the object
    for (const k in obj) {
      const item =
        typeof obj[k] === 'object'
          ? `${k}${stringify(obj[k])}` // ${k} = preserve the key that holds the object
          : `${k}${obj[k]}`;
      key += item;
    }
  }

  return key;
}

/* =================================================================  
                              TESTS
================================================================= */

// /* eslint-enable */
// var complexFunction = function(arg1, arg2) { // complex calculation in here };
// var cache = function(func) {....}
const cachedFunction = cache(complexFunction);
let complexFunctionCalls = 0;

// function complexFunction(arg1) {
//   complexFunctionCalls++;
//   return arg1
//     .split('')
//     .reverse()
//     .join('');
// }

// function complexFunction(n) {
//   complexFunctionCalls++;
//   return n * n;
// }

// function complexFunction(n) {
//   complexFunctionCalls++;
//   return n * n * n
// }

// function complexFunction(obj1, obj2) {
//   complexFunctionCalls++;
//   return Object.keys(obj1).concat(Object.keys(obj2));
// }

// let complexFunction = function (n) { return n * n; }
// let complexFunction = function (n) { return n * n * n; }

function complexFunction() {
  complexFunctionCalls++;
}

console.log(cachedFunction('foo', 'bar'));
console.log(cachedFunction('foo', 'bar'));
console.log('complexFunctionCalls: ', complexFunctionCalls); // 1
console.log(cachedFunction('foo', 'baz'));
console.log('complexFunctionCalls: ', complexFunctionCalls); // 2
// console.log(cachedFunction([{ baz: 'baz' }, { foo: 'foo', bar: 'bar' }]));
// console.log(cachedFunction([{ foo: 'foo', bar: 'bar' }, { baz: 'baz' }]));

// console.log(cachedFunction())
// console.log('complexFunctionCalls: ', complexFunctionCalls); //
// console.log(cachedFunction())
// console.log('complexFunctionCalls: ', complexFunctionCalls); //

// arguments1 = [{ foo: 'foo', bar: 'bar' }, { baz: 'baz' }]
// arguments2 = [{ baz: 'baz' }, { foo: 'foo', bar: 'bar' }] // different
// arguments3 = [{ foo: 'foo', bar: 'bar' }, { baz: 'baz' }]; // same

/* =================================================================  
                              NOTES
================================================================= */

/*
Instead of creating our own recursive stringify() helper function, we could use
JSON.stringify(obj) to turn an object into a string. 

--------------------------------------------------------------------
Converting an object to a string
https://stackoverflow.com/questions/5612787/converting-an-object-to-a-string

//Make an object a string that evaluates to an equivalent object
//  Note that eval() seems tricky and sometimes you have to do
//  something like eval("a = " + yourString), then use the value
//  of a.
//
//  Also this leaves extra commas after everything, but JavaScript
//  ignores them.
function convertToText(obj) {
    //create an array that will later be joined into a string.
    var string = [];

    //is object
    //    Both arrays and objects seem to return "object"
    //    when typeof(obj) is applied to them. So instead
    //    I am checking to see if they have the property
    //    join, which normal objects don't have but
    //    arrays do.
    if (typeof(obj) == "object" && (obj.join == undefined)) {
        string.push("{");
        for (prop in obj) {
            string.push(prop, ": ", convertToText(obj[prop]), ",");
        };
        string.push("}");

    //is array
    } else if (typeof(obj) == "object" && !(obj.join == undefined)) {
        string.push("[")
        for(prop in obj) {
            string.push(convertToText(obj[prop]), ",");
        }
        string.push("]")

    //is function
    } else if (typeof(obj) == "function") {
        string.push(obj.toString())

    //all other values can be done with JSON.stringify
    } else {
        string.push(JSON.stringify(obj))
    }

    return string.join("")
}


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
