/* =================================================================  
                          INSTRUCTIONS
================================================================= */

/*
groupingDishes
https://app.codesignal.com/interview-practice/task/xrFgR63cw7Nch4vXo

tags: easy, hash table

INSTRUCTIONS
We're given entrees and their ingredients. 
We need to group entrees by ingredient.
If there's an ingredient in at least 2 entrees, include it in array. 

INPUT
[["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
["Quesadilla", "Chicken", "Cheese", "Sauce"],
["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]]

OUTPUT
[["Cheese", "Quesadilla", "Sandwich"],
["Salad", "Salad", "Sandwich"],
["Sauce", "Pizza", "Quesadilla", "Salad"],
["Tomato", "Pizza", "Salad", "Sandwich"]]

--------------------------------------------------------------------
REQUIREMENTS
Ingredients have to be in alphabetic order
Entrees have to be in alphabetic order

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

// ATTEMPT #1 

/* INPUT
[["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
["Quesadilla", "Chicken", "Cheese", "Sauce"],
["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]] */

function groupingDishes1(dishes) {

  // Create dish object with entree as key, and object of ingredients as value
  const dishObj = {};

  for (let i = 0; i < dishes.length; i++) {
    // Add entrees to object
    dishObj[dishes[i][0]] = {}; // salad: {}
    // Create a name for the ingredient object. Pass by 'reference'.
    dishSub = dishObj[dishes[i][0]]; // dishSub = dishObj['salad']

    // Add ingredients to ingredient object
    for (let j = 1; j < dishes[i].length; j++) {
      dishSub[dishes[i][j]] = 'e'; // use 'e' for 'exist', a character is truthy
    }
  }

  console.log(dishObj);

  /*
  dishObj
  { Salad: { Tomato: e, Cucumber: e, Salad: e, Sauce: e },
  Pizza: { Tomato: e, Sausage: e, Sauce: e, Dough: e },
  Quesadilla: { Chicken: e, Cheese: e, Sauce: e },
  Sandwich: { Salad: e, Bread: e, Tomato: e, Cheese: e } }
  */

  /* Create set of ingredients
  This is to avoid triple nesting:
  1. Iterate entrees: salad, pizza, quesadilla, sandwich
  2. Iterate ingredients in salad: tomato, cucumber, salad, sauce 
  3. Then check if pizza, quesadilla, sandwich have tomato */

  // Create set of ingredients
  const ingSet = new Set();

  for (const entree of dishes) {
    for (const ing of entree) {
      if (!ingSet.has(ing)) {
        ingSet.add(ing);
      }
    }
  }

  // console.log(ingSet);

  // Alphabetize Set
  let ingSetA = [...ingSet.values()];
  ingSetA = ingSetA.sort();

  console.log(ingSetA);

  // Create final 2d array
  const final = [];

  // Iterate ingredient set, then iterate dish object to check if entree has an ingredient
  // If the ingredient exists, add the ingredient + entree to array
  for (const ing of ingSetA) {
    // Temp variable to hold ingred + entree array
    const inventory = [ing]; // [cheese]

    for (const entree in dishObj) {
      if (dishObj.hasOwnProperty(entree)) {
        if (dishObj[entree][ing]) { // dishObj['quesadilla']['cheese'] = 'e'
          inventory.push(entree); 
          console.log({ inventory }); // [cheese, quesadilla]
        }
      }
    }

    if (inventory.length > 2) { // Only add ingredient if it has >= 2 entrees. 1 ing + 2 ent = 3
      final.push(inventory);
    }
  }

  // console.log(final);

  const finalA = [];

  // Alphabetize entrees in ingredient buckets
  for (list of final) {
    const ing = list[0]; // cheese
    let entree = list.slice(1); // [sandwich, quesadilla]
    entree = entree.sort(); // [quesadilla, sandwich]
    finalA.push([ing, ...entree]); // [cheese, quesadilla, sandwich]
  }

  console.log(finalA);

  return finalA;
}

/* -------------------------------------------------------------- */

// ATTEMPT #2

function groupingDishes(dishes) {
  // Create hash table with ingredient as key, and array of entrees as value
  const ht = {};
  
  for (let i = 0; i < dishes.length; i++) {
    let entree = dishes[i][0]; // salad
    
    for (let j = 1; j < dishes[i].length; j++) {
      let ing = dishes[i][j]; // tomato
      
      // If hash table has ingredient, push entree to array
      if (ht.hasOwnProperty(ing)) {
        ht[ing].push(entree);
      } 
      // If hash table doesn't have ingredient, add ingredient-entreeArray property
      else {
        ht[ing] = [entree];
      }
    }
  }
  
  // console.log( ht );
  
  // Alphabetize entrees
  for (let ing in ht) {
    if (ht.hasOwnProperty(ing)) {
      ht[ing].sort(); // sort() mutates array in-place
    }
  }
  // console.log( ht );
  
  // Create a 2D array
  // Remove properties with array length less than 2
  // Combine key and value into one array
  
  const ingBucket = [];
  
  for (let ing in ht) {
    if (ht.hasOwnProperty(ing)) {
      if (ht[ing].length >= 2) {
        ingBucket.push([ing, ...ht[ing]]);
      }
    }
  }
  
  // console.log( ingBucket );
  
  ingBucket.sort( (a, b) => {
    // console.log('hi: ', a[0]);
    let ingA = a[0].toUpperCase();
    let ingB = b[0].toUpperCase();
    // console.log('swap')
    
    // -1 = a first 
    // e.g. a = 65, z = 90
    if (ingA < ingB) { // move a left
      return -1;
    }
    
    // 1 = b first
    else if (ingA > ingB) { // move b left
      return 1;
    }
    
    else {
      return 0;
    }
  });
  
  // console.log( ingBucket );
  
  return ingBucket;
}

/* =================================================================  
                          TESTS
================================================================= */

/* eslint-enable */

console.log(
  groupingDishes([
    ['Salad', 'Tomato', 'Cucumber', 'Salad', 'Sauce'],
    ['Pizza', 'Tomato', 'Sausage', 'Sauce', 'Dough'],
    ['Quesadilla', 'Chicken', 'Cheese', 'Sauce'],
    ['Sandwich', 'Salad', 'Bread', 'Tomato', 'Cheese']
  ])
);

/* [["Cheese", "Quesadilla", "Sandwich"],
["Salad", "Salad", "Sandwich"],
["Sauce", "Pizza", "Quesadilla", "Salad"],
["Tomato", "Pizza", "Salad", "Sandwich"]] */

console.log(
  groupingDishes([
    ['Pasta', 'Tomato Sauce', 'Onions', 'Garlic'],
    ['Chicken Curry', 'Chicken', 'Curry Sauce'],
    ['Fried Rice', 'Rice', 'Onions', 'Nuts'],
    ['Salad', 'Spinach', 'Nuts'],
    ['Sandwich', 'Cheese', 'Bread'],
    ['Quesadilla', 'Chicken', 'Cheese']
  ])
);

/* [["Cheese", "Quesadilla", "Sandwich"],
["Chicken", "Chicken Curry", "Quesadilla"],
["Nuts", "Fried Rice", "Salad"],
["Onions", "Fried Rice", "Pasta"]]
*/

console.log(
  groupingDishes([
    ['Pasta', 'Tomato Sauce', 'Onions', 'Garlic'],
    ['Chicken Curry', 'Chicken', 'Curry Sauce'],
    ['Fried Rice', 'Rice', 'Onion', 'Nuts'],
    ['Salad', 'Spinach', 'Nut'],
    ['Sandwich', 'Cheese', 'Bread'],
    ['Quesadilla', 'Chickens', 'Cheeseeee']
  ])
);

// []

console.log(
  groupingDishes([
    ['First', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
    ['Second', 'i', 'h', 'g', 'f', 'e', 'x', 'c', 'b', 'a']
  ])
);

/* 
[["a","First","Second"], 
 ["b","First","Second"], 
 ["c","First","Second"], 
 ["e","First","Second"], 
 ["f","First","Second"], 
 ["g","First","Second"], 
 ["h","First","Second"], 
 ["i","First","Second"]]
 */

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
                          SOLUTIONS
================================================================= */

/*
 */

/*
--------------------------------------------------------------------
*/

/* -------------------------------------------------------------- */
