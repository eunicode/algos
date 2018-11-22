/* =================================================================  
  INSTRUCTIONS
================================================================= */

/* 
Who likes it?
https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

Tags: FUNDAMENTALS, FORMATTING, ALGORITHMS, STRINGS
*/

/* =================================================================  
  SOLUTIONS
================================================================= */

/*
 */

/* =================================================================  
  CODE
================================================================= */

function likes(names) {
    const numLength = names.length;

    if (numLength <= 0) {
        return `no one likes this`;
    } else if (numLength === 1) {
        return `${names[0]} likes this`;
    } else if (numLength === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (numLength === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else if (numLength === 4) {
        return `${names[0]}, ${names[1]} and 2 others like this`;
    } else if (numLength > 4) {
        const count = numLength - 2;
        return `${names[0]}, ${names[1]} and ${count} others like this`;
    }
}

/* =================================================================  
  TESTS
================================================================= */

// console.log(likes([]));
// 'no one likes this'

// console.log(likes(['Peter']));
// 'Peter likes this'

// console.log(likes(['Jacob', 'Alex']));
// 'Jacob and Alex like this'

// console.log(likes(['Max', 'John', 'Mark']));
// 'Max, John and Mark like this'

console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
// 'Alex, Jacob and 2 others like this'

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
