/* =================================================================  
                          INSTRUCTIONS
================================================================= */

/*
Default Arguments
https://www.codewars.com/kata/52605419be184942d400003d/train/javascript

Write a function defaultArguments. It takes a function as an argument, along with an object containing default values for that function's arguments, and returns another function which defaults to the right values.

You cannot assume that the function's arguments have any particular names.

You should be able to call defaultArguments repeatedly to change the defaults.

HINT: This problem requires using Fuction.prototype.toString() in order to extract a function's argument list

function add(a,b) { return a+b;};

```
var add_ = defaultArguments(add,{b:9});
add_(10); // returns 19
add_(10,7); // returns 17
add_(); // returns NaN

add_ = defaultArguments(add_,{b:3, a:2});
add_(10); // returns 13 now
add_(); // returns 5

add_ = defaultArguments(add_,{c:3}); // doesn't do anything, since c isn't an argument
add_(10); // returns NaN
add_(10,10); // returns 20
```

TAGS: functionalprogramming, declarativeprogramming, spread_
incomplete_
 */

/* =================================================================  
                              CODE
================================================================= */

/* eslint-disable */

/* ATTEMPT #1
Convert given function to a string. Extract the parameter names and store in array. 
Sort the given default arguments object into an array. Ex: { c: 3 } gets converted to [null, null, 3]
Return a function that will call the given function. 
Iterate parameter names array. If the function is given an argument, push the argument into the `use` array. Else push the default argument. 
*/

function defaultArguments(func, params) {
  const funcStr = func.toString(); // Turn given function to string 
  const parens = funcStr.match(/\(.*\)/); // regex to match (a,b)
  const paramsStr = parens[0].replace(/\(|\)|,|\s/g, ''); // delete parens, commas
  const paramsArr = []; // store parameter names

  // Iterate parameter names string, "ab", and push char to array
  for (const c of paramsStr) {
    paramsArr.push(c);
  }

  const defaultArr = []; // store default arguments

  // Iterate parameter names array
  for (const name of paramsArr) {
    // If the given object has a key w/ the same name as a parameter name, push argument value to default arguments array. Else push null. 
    if (params.hasOwnProperty(name)) {
      defaultArr.push(params[name]);
    } else {
      defaultArr.push(null);
    }
  }

  // Leverage closure
  return function(...given) { // rest syntax
    const use = []; // store arguments that will be used to call function

    // Iterate parameter names array 
    for (let i = 0; i < paramsArr.length; i++) {
      // If the function is given an argument, use the argument. Else use the default argument.  
      if (given[i]) {
        use.push(given[i]);
      } else {
        use.push(defaultArr[i]);
      }
    }

    console.log({ funcStr });
    console.log({ arguments });
    console.log({ params });
    console.log({ paramsArr });
    console.log({ use });
    console.log({ defaultArr });

    return func(...use); // spread syntax
  };
}

/* =================================================================  
                              TESTS
================================================================= */

/* eslint-enable */

function add(a, b) {
  return a + b;
}
let add_ = defaultArguments(add, { b: 9 });
console.log(add_(10)); // 19
console.log(add_(10, 5)); // 15
add_ = defaultArguments(add_, { b: 3 });
console.log(add_(10)); // 13

/* =================================================================  
                              NOTES
================================================================= */

/*
Attempt #1 didn't work because we cannot call `defaultArguments` repeatedly to change the defaults.
Fails this test: add_ = defaultArguments(add_, { b: 3 });

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
