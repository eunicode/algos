/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
Sock Merchant
https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

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

function sockMerchant(n, ar) {
  const store = new Map();
  let pairs = 0;

  ar.forEach(color => {
    if (store.has(color) === true) {
      console.log(`color: ${color} and value: ${store.get(color)}`);
      store.set(color, store.get(color) + 1);
      console.log(`new count: ${store.get(color)}`);
    } else {
      store.set(color, 1);
    }
  });

  store.forEach(value => {
    console.log({ value });
    const numPairs = Math.floor(value / 2);
    pairs += numPairs;
  });

  return pairs;
}

/* =================================================================  
  TESTS
================================================================= */

// TEST CASES
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
// 3

console.log(sockMerchant(10, [10, 1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
// 4

/* =================================================================  
  NOTES
================================================================= */

/*
LESSONS LEARNED

- How to use Map object
- The Map object has a forEach() method with a callback function with parameters: 
element value, element key, Map object
- You can't break in a forEach() callback function
- The `else` block is only unnecessary if the `if` block has a `return` statement. 

--------------------------------------------------------------------
MAP OBJECT

How to update the value of a key in a Map

How to increment a value in a JavaScript object?
https://stackoverflow.com/questions/39590858/how-to-increment-a-value-in-a-javascript-object

m.set('foo', m.get('foo') + 1);

JavaScript - Map() increment value
https://stackoverflow.com/questions/53584369/javascript-map-increment-value

let map = new Map();
map.set("a", {val: 1});
map.get("a").val++;

--------------------------------------------------------------------
Map.prototype.forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach

 */

/* =================================================================  
  TO DO
================================================================= */

/*
Solve this with Set
 */

/*
--------------------------------------------------------------------
*/
