/* =================================================================  
  INSTRUCTIONS
================================================================= */

/* 
sudoku2
https://app.codesignal.com/interview-practice/task/SKZ45AF99NpbnvgTn
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/

Sudoku is a number-placement puzzle. 
The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. 
Note that the puzzle represented by grid does not have to be solvable.

Category: Arrays
Level: Easy
Time: 30 mins
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

// SUDOKU TEST

function sudoku2(globalGrid) {
  // Call test functions, and store results in an array
  const testResults = [
    checkRow(globalGrid),
    checkColumn(globalGrid),
    checkSubGrid(globalGrid)
  ];

  // If there is at least one `false` inside the array, then return false
  for (const bool of testResults) {
    if (bool === false) {
      return false;
    }
  }

  // Else return true
  return true;
}

// ROW TEST

function checkRow(globalGrid) {
  // Repetitive method - Hardcode maps
  // const row1 = new Map();
  // const row2 = new Map();
  // const row3 = new Map();
  // const row4 = new Map();
  // const row5 = new Map();
  // const row6 = new Map();
  // const row7 = new Map();
  // const row8 = new Map();
  // const row9 = new Map();

  // DRYer method - Generate maps with for loop
  const rows = []; // [ Map {}, Map {}, Map {}, Map {}, ...]

  for (let i = 0; i < 9; i += 1) {
    rows.push(new Map());
  }

  // Outer loop - iterate arrays
  globalGrid.forEach((arr, arrI) => {
    // arrI is important. We want to fill up a map object representing the row arrays

    // Inner loop - iterate elements
    arr.forEach(num => {
      if (rows[arrI].has(num)) {
        rows[arrI].set(num, 2);
      }

      // `else` is important otherwise you're resetting (num, 2) back to (num, 1)
      else {
        rows[arrI].set(num, 1);
      }
    });
  });

  // Check that map-1 looks like row-1, map-2 looks like row-2, etc
  console.log({ rows });

  // Iterate maps in array
  for (const mapp of rows) {
    // Iterate pairs in maps 
    for (const pair of mapp) {
      // If the key is not '.', and the value is 2, then there is a duplicate, so return false
      if (pair[0] !== '.' && pair[1] === 2) {
        return false;
      }
    }
  }
}

// COLUMN TEST

// function createNewMap() {
//   return new Map();
// }

function checkColumn(globalGrid) {
  const columns = [];

  for (let i = 0; i < 9; i += 1) {
    columns.push(new Map());
    // columns.push(createNewMap());
  }

  // console.log({ columns }); // [ Map {}, Map {}, Map {}, Map {}, ...]

  // Iterate maps in array
  for (let i = 0; i < 9; i += 1) {
    // Iterate pairs in map
    // Put every first element in col-1 map, put every second element in col-2 map, etc
    // If a map already has a number, then give it a value of 2 (marks duplicate)
    for (let j = 0; j < 9; j += 1) {
      if (columns[j].has(globalGrid[i][j])) {
        columns[j].set(globalGrid[i][j], 2);
      } else {
        columns[j].set(globalGrid[i][j], 1);
      }
    }
  }

  console.log({ columns });

  // Iterate maps in array
  for (const mapp of columns) {
    // Iterate pairs in map
    for (const pair of mapp) {
      // If a pair has a value of 2, it is a duplicate, so return false
      if (pair[0] !== '.' && pair[1] === 2) {
        return false;
      }
    }
  }

  return true;
}

// SUBGRID TEST

// Use this function to check if map has a number. 
// If a map has a number, then update the value to 2. 
// If the map doesn't have a number, add it to the map.
function markDuplicates(grid, globalGrid, i, j) {
  if (grid.has(globalGrid[i][j])) {
    grid.set(globalGrid[i][j], 2)
  } else {
    grid.set(globalGrid[i][j], 1);
  }
}

/*
SUBGRIDS & INDICES
Row = arrays
Column = elements/indices

R: 0-2 | R: 0-2 | R: 0-2
C: 0-2 | C: 3-5 | C: 6-8

R: 3-5 | R: 3-5 | R: 3-5
C: 0-2 | C: 3-5 | C: 6-8

R: 6-8 | R: 6-8 | R: 6-8
C: 0-2 | C: 3-5 | C: 3-5
*/

function checkSubGrid(globalGrid) {
  const subGrids = Array.from({ length: 10 }, () => new Map());
  // console.log({ subGrids }); // [ Map {}, Map {}, Map {}, Map {}, ...]

  // Iterate arrays
  for (let i = 0; i < 9; i += 1) {
    // Iterate elements in arrays
    for (let j = 0; j < 9; j += 1) {
      // Create maps for subGrids 1-3
      if (i >= 0 && i <= 2) {
        if (j >= 0 && j <= 2) {
          markDuplicates(subGrids[0], globalGrid, i, j);
        } else if (j >= 3 && j <= 5) {
          markDuplicates(subGrids[1], globalGrid, i, j)
        } else if (j >= 6 && j <= 8) {
          markDuplicates(subGrids[2], globalGrid, i, j)
        }
      } 
      // Create maps for subGrids 4-6
      else if (i >= 3 && i <= 5) {
        if (j >= 0 && j <= 2) {
          markDuplicates(subGrids[3], globalGrid, i, j)
        } else if (j >= 3 && j <= 5) {
          markDuplicates(subGrids[4], globalGrid, i, j)
        } else if (j >= 6 && j <= 8) {
          markDuplicates(subGrids[5], globalGrid, i, j)
        }
      } 
      // Create maps for subGrids 7-9
      else if (i >= 6 && i <= 8) {
        if (j >= 0 && j <= 2) {
          markDuplicates(subGrids[6], globalGrid, i, j)
        } else if (j >= 3 && j <= 5) {
          markDuplicates(subGrids[7], globalGrid, i, j)
        } else if (j >= 6 && j <= 8) {
          markDuplicates(subGrids[8], globalGrid, i, j)
        }
      }
    }
  }

  console.log({ subGrids });

  for (const mapp of subGrids) {
    for (pair of mapp) {
      if (pair[0] !== '.') {
        if (pair[1] === 2) {
          return false;
        }
      }
    }
  }

  return true;
}

/* =================================================================  
  TESTS
================================================================= */

// console.log(
//   sudoku2([
//     ['.', '.', '.', '1', '4', '.', '.', '2', '.'],
//     ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
//     ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//     ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
//     ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
//     ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
//     ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
//     ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
//     ['.', '.', '.', '5', '.', '.', '.', '7', '.']
//   ])
// );
// true

// console.log(
//   sudoku2([
//     ['.', '.', '.', '.', '2', '.', '.', '9', '.'],
//     ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
//     ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
//     ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
//     ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
//     ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
//     ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
//     ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
//     ['.', '2', '.', '.', '3', '.', '.', '.', '.']
//   ])
// );
// false

// console.log(
//   sudoku2([
//     ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
//     ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//     ['5', '.', '.', '.', '.', '.', '.', '9', '.'],
//     ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
//     ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
//     ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
//     ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
//     ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//     ['.', '.', '.', '.', '.', '.', '.', '.', '.']
//   ])
// );
// false

// console.log(
//   sudoku2([
//     ['.', '.', '.', '.', '.', '.', '.', '.', '2'],
//     ['.', '.', '.', '.', '.', '.', '6', '.', '.'],
//     ['.', '.', '1', '4', '.', '.', '8', '.', '.'],
//     ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//     ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//     ['.', '.', '.', '.', '3', '.', '.', '.', '.'],
//     ['5', '.', '8', '6', '.', '.', '.', '.', '.'],
//     ['.', '9', '.', '.', '.', '.', '4', '.', '.'],
//     ['.', '.', '.', '.', '5', '.', '.', '.', '.']
//   ])
// );
// true

// THIS TEST FAILS SUB-GRID TEST
console.log(
  sudoku2([
    ['.', '4', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '1', '.', '.', '7', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '3', '.', '.', '.', '6', '.'],
    ['.', '.', '.', '.', '.', '6', '.', '9', '.'],
    ['.', '.', '.', '.', '1', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
    ['.', '.', '.', '8', '.', '.', '.', '.', '.']
  ])
);
// false

/* =================================================================  
  NOTES
================================================================= */

/*
ACCESS COLUMNS OF 2D ARRAY

arr[i][j]

arr[0-8][0]
Run through all rows
and only pluck the first elements. 

Or
arr[0][0-8]
On row 1, 
put element at index 0 in container called col-0. Repeat for indices 1 to 8.  

 */

/* =================================================================  
  TO DO
================================================================= */

/*
Solve with Sets
Solve in a more DRY, functional way
 */

/*
--------------------------------------------------------------------
*/
