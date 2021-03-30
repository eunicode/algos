/* =================================================================  
                          INSTRUCTIONS
================================================================= */

/*
Directions Reduction
https://www.codewars.com/kata/550f22f4d758534c1100025a/javascript

TAGS: recursion_, while_, stack_
 */

/* =================================================================  
                              CODE
================================================================= */

/* eslint-disabl e */

// MY SOLUTION #1 - Time O(N^2)
/*
Have a boolean variable to check if directions were deleted
Have a variable to hold modified array

Have a while loop to keep deleting directions until there are no more directions to be deleted. 
  Use a for loop to check if adjacent directions cancel each other out
  Check if length of previous array is same as current array. If it is, it means that there are no more directions to delete. Switch boolean to false. 

Return the modified array   
 */

function dirReduc(arr) {
  let directionWasReduced = true;
  let dir = [...arr].map(elm => elm.toUpperCase());

  while (directionWasReduced === true) {
    for (let i = 0; i < dir.length; i++) {
      const curr = dir[i];
      const next = dir[i + 1];

      if (
        (curr === 'NORTH' && next === 'SOUTH') ||
        (curr === 'SOUTH' && next === 'NORTH')
      ) {
        dir[i] = null;
        dir[i + 1] = null;
      }
      if (
        (curr === 'WEST' && next === 'EAST') ||
        (curr === 'EAST' && next === 'WEST')
      ) {
        dir[i] = null;
        dir[i + 1] = null;
      }
    }

    const len = dir.length;
    dir = dir.filter(elm => elm !== null);

    if (len === dir.length) {
      directionWasReduced = false;
    }
  }

  return dir;
}

/* ================================================================= */
// OTHERS' SOLUTION - STACK

function dirReducS(arr) {
  const opp = {
    NORTH: 'SOUTH',
    EAST: 'WEST',
    SOUTH: 'NORTH',
    WEST: 'EAST'
  };

  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (stack[stack.length - 1] === opp[arr[i]]) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }

  return stack;
}

/* ================================================================= */
// OTHERS' SOLUTION - REDUCE

function dirReducR(plan) {
  const opposite = {
    NORTH: 'SOUTH',
    EAST: 'WEST',
    SOUTH: 'NORTH',
    WEST: 'EAST'
  };

  return plan.reduce((dirs, dir) => {
    if (dirs[dirs.length - 1] === opposite[dir]) {
      dirs.pop();
    } else {
      dirs.push(dir);
    }
    return dirs;
  }, []);
}

/* =================================================================  
                              TESTS
================================================================= */

/* eslint-enable */

console.log();

// Test.assertSimilar(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
// Test.assertSimilar(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
// Test.assertSimilar(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), [])

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
