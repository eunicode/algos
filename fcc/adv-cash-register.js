/*
JavaScript Algorithms and Data Structures Projects: Cash Register
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register/

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {
  // Convert everything to cents (integers) to avoid floating point decimals

  // Customer's change 
  let diff = Math.round((cash - price) * 100);
  console.log({ diff });

  // Total amount of cash in register
  // Convert to cents
  let cidTotal = cid.map((curr) => Math.round(curr[1] * 100));
  // Add everything up
  cidTotal = cidTotal.reduce((acc, curr) => acc + curr, 0);
  console.log({ cidTotal });

  // Create a reference table of types of cash to values
  const cashTable = {
    "ONE HUNDRED": 10000,
    TWENTY: 2000,
    TEN: 1000,
    FIVE: 500,
    ONE: 100,
    QUARTER: 25,
    DIME: 10,
    NICKEL: 5,
    PENNY: 1
  };

  // Generate an object with type of cash and amount of that type of cash in register
  const cidCopy = [...cid]; // Create copy of cid bc `reverse` is a mutator method
  const cidTable = cidCopy.reverse().reduce((acc, curr) => {
    acc[curr[0]] = Math.round(curr[1] * 100);
    return acc;
  }, {});
  console.log({ cidTable });
  // Example cidTable:  
  // { 
  //   'ONE HUNDRED': 10000,
  //    TWENTY: 6000,
  //    TEN: 2000,
  //    FIVE: 5500,
  //    ONE: 9000,
  //    QUARTER: 425,
  //    DIME: 310,
  //    NICKEL: 205,
  //    PENNY: 101 
  // }

  let change = [];

  let diffUpdate = diff;

  for (const key in cashTable) {

    let changeValue = 0;
    let cidTypeValue = cidTable[key];
    let cashTypeValue = cashTable[key];
    
    if (diffUpdate >= cashTypeValue) {
      // cashTable and cidTable have same keys
      // cidTypeValue needs to be > 0, because we can't give a bill in change if it doesn't exist
      while (diffUpdate >= cashTypeValue && cidTypeValue > 0) {

        diffUpdate = diffUpdate - cashTypeValue;
        cidTypeValue = cidTypeValue - cashTypeValue;
        // console.log({ cidTypeValue });
        changeValue = changeValue + cashTypeValue;

      } // while

      change.push([key, changeValue]);

    } // first if 

  }

  // Find the total amount of change created from cash in cash register
  const checkChange = change.reduce((acc, curr) => {
    return acc + curr[1];
  }, 0);
  console.log({ checkChange });
  console.log({ change });

  // If the generated change is equal to the total amount of cash in cash register and the required 
  // change, the cash register is now closed. 
  if (checkChange === cidTotal && checkChange === diff) {
    return { status: "CLOSED", change: cid };
  }

  // If the generated change is equal to the required change, we have successfully generated change.
  if (checkChange === diff) {
    // console.log({ change })
    change = change.map( curr => [curr[0], curr[1]/100] );
    return { status: "OPEN", change: change };
  } 

  // If the generated change is not equal to the required change, it's bc we have insufficient funds.
  else {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
}

// TEST #1
console.log(checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]));

// ANSWER #1
/* 
{ 
  status: "OPEN",
  [
    ["TWENTY", 60], 
    ["TEN", 20], 
    ["FIVE", 15], 
    ["ONE", 1], 
    ["QUARTER", 0.5], 
    ["DIME", 0.2], 
    ["PENNY", 0.04]
  ]
}
*/

// TEST #2
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

// ANSWER #2
// {status: "INSUFFICIENT_FUNDS", change: []}
/* Edge case: We have $1.01 in register, which is greater than the required change, $0.50, but we 
don't have enough coins to give the correct change. */

// TEST #3
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

// ANSWER #3
// {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}