/* =================================================================  
  INSTRUCTIONS
================================================================= */

/* 
rotateImage
https://app.codesignal.com/interview-practice/task/5A8jwLGcEpTPyyjTB

Category: Arrays
Level: Easy
Time: 15 mins

Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

You are given an n x n 2D matrix that represents an image. 
Rotate the image by 90 degrees (clockwise).

Example

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer a

Guaranteed constraints:
1 ≤ a.length ≤ 100,
a[i].length = a.length,
1 ≤ a[i][j] ≤ 104.

[output] array.array.integer
*/

/* =================================================================  
  SOLUTIONS
================================================================= */

/*
*/

/* =================================================================  
  CODE
================================================================= */

function rotateImage(a) {
    // Length of given array
    const numArr = a.length;
    // console.log({ numArr });

    // New rotated array
    const rotatedArr = [];

    // Push empty arrays
    for (let i = 0; i < numArr; i++) {
        rotatedArr.push([]);
    }
    // console.log({ rotatedArr });

    // Iterate given array backwards
    for (let i = a.length - 1; i >= 0; i--) {
        // Iterate sub-array. 
        // Every element in the last sub-array (main array - index 2) becomes the first element in the 
        // new sub-arrays (sub-array - index 1). 
        // i = 2
        // a[i] = [7,8,9]
        // [7,8,9].forEach( (elm, i) => mainArr[i].push(elm))
        // [4,5,6].forEach(...)
        // [1,2,3].forEach(...)
        // i iterates main array backwards
        // idx iterates main array forwards.
        // forEach() iterates sub-array forwards.
        a[i].forEach( (elm, idx) => {
            // rotatedArr[0].push(7)
            // rotatedArr[1].push(8)
            // rotatedArr[2].push(9)
            rotatedArr[idx].push(elm);
            // const reverseI = Math.abs((a.length - 1) - i); // Unnecessary bc we can use forEach() index parameter 
        });
    }
    
    // console.log({ rotatedArr });
    return rotatedArr;
}

/* =================================================================  
  TESTS
================================================================= */

console.log(rotateImage([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]

/* =================================================================  
  NOTES
================================================================= */

/*
TWO DIMENSIONAL ARRAYS
We had a 2D array. That means nested for loops. 
In this case, it was a for loop 
with a nested forEach().
We needed to iterate main array backwards.
And we needed to iterate main array forwards.
We created a backwards iterating variable.
And we used the forEach() index parameter to iterate forwards.
Rotated array = elements in last sub-array become first elements of new sub-arrays.
Elements in last sub-array (index 2) become index 0 elements of all new sub-arrays.
Elements in first sub-array (index 0) become index 2 elements of all sub-arrays.
Rotating means a switcheroo
*/

/* =================================================================  
  TO DO
================================================================= */

/*
*/

/*
--------------------------------------------------------------------
*/
