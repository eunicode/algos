/* =================================================================  
  INSTRUCTIONS
================================================================= */

/*
IPv4 to int32
https://www.codewars.com/kata/52ea928a1ef5cfec800003ee

*/

/* =================================================================  
  SOLUTIONS
================================================================= */

/*
 */

/* =================================================================  
  PRE-NOTES
================================================================= */

/* 
ASSURANCES / OBSERVATIONS
Numbers will always be positive

PLAN
Split the string by decimal points - split() 
Convert each number to binary form 
  - string to number - parseInt()
  - decimal to binary - toString(radix)
Have an accumulator to join all the binary numbers - join(), or use "+"
Convert accumulator to decimal form - toString & parseInt

*/

/* =================================================================  
  CODE
================================================================= */

/* eslint-disabl e */

function ipToInt32(ip) {
  const givenArr = ip.split('.');
  console.log({ givenArr });

  const binaryArr = givenArr.map(elm => {
    let stage1 = Number.parseInt(elm, 10).toString(2);

    if (stage1.length < 8) {
      while (stage1.length < 8) {
        stage1 = `0${stage1}`;
      }
    }

    return stage1;
  });
  console.log({ binaryArr });

  const binaryStr = binaryArr.join('');
  console.log({ binaryStr });

  const finalNum = Number.parseInt(binaryStr, 2);
  console.log({ finalNum });

  return finalNum;
}

/* =================================================================  
  TESTS
================================================================= */

console.log(ipToInt32('128.32.10.1')); // 2149583361

/* =================================================================  
  NOTES
================================================================= */

/*
Tricky points
- Type conversion: strings, numbers
- 1 should be written as 00000001
 */

/* =================================================================  
  TO DO
================================================================= */

/*
Find less hacky ways of solving this problem
Find other ways of converting strings to numbers, vice versa
Find other ways of converting decimal to binary
 */

/*
--------------------------------------------------------------------
*/

/* -------------------------------------------------------------- */
