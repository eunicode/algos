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
  // Customer's change 
  let diff = cash - price;
  console.log({ diff });

  // Total amount of cash in register
  const cidTotal = cid.reduce((acc, curr) => {
    return acc + curr[1];
  }, 0);
  console.log({ cidTotal });

  const cidTotRound = parseFloat((Math.round(cidTotal * 100) / 100).toFixed(2));
  console.log({ cidTotRound });

  // Create a reference table of types of cash to values
  const cashTable = {
    "ONE HUNDRED": 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01
  };

  // Generate an object with type of cash and amount of cash in register
  const cidTable = cid.reverse().reduce((acc, curr) => {
    acc[curr[0]] = curr[1];
    return acc;
  }, {});
  console.log({ cidTable });

  const change = [];

  if (diff > cidTotRound) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (diff === cidTotRound) {
    return { status: "CLOSED", change: cid };
  }

  for (const key in cashTable) {
    let typeAmt = 0;
    let typeCid = cidTable[key];
    let diffFloat;
    let diffUpdate = diff;

    if (diffUpdate >= cashTable[key]) {
      // cashTable and cidTable have same keys
      // typeCid needs to be > 0, because we can't give a bill in change if it doesn't exist
      while (diffUpdate >= cashTable[key] && typeCid > 0) {
        diffFloat = diffUpdate - cashTable[key];
        diffUpdate = Math.round(diffFloat * 100) / 100;
        typeAmt = typeAmt + cashTable[key];
        typeCid = typeCid - cashTable[key];
        // console.log({ typeCid });

        // We get floating point decimals again
        // diff becomes 0.00999999
        // It gets treated as 0, but we need 0.01
        // console.log({ diff });
        // if (diff < cashTable[key]) {
        //   change.push([key, typeAmt]);
        // }
      }
      change.push([key, typeAmt]);
    }
  }

  const checkChange = change.reduce((acc, curr) => {
    return acc + curr[1];
  }, 0);
  console.log({ checkChange });
  console.log({ change });

  if (checkChange === diff) {
    console.log({ change });
    return { status: "OPEN", change: change };
  } else {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
}

// TEST #1
checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);

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
/* [["TWENTY", 60], 
  ["TEN", 20], 
  ["FIVE", 15], 
  ["ONE", 1], 
  ["QUARTER", 0.5], 
  ["DIME", 0.2], 
  ["PENNY", 0.04]]
*/

// TEST #2
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

// ANSWER #2
// {status: "INSUFFICIENT_FUNDS", change: []}
/* Edge case: We have $1.01 in register, which is greater than $0.50, but we don't have enough 
coins to give the correct change. */
