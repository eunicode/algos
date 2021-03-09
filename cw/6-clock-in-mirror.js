/* =================================================================  
  INSTRUCTIONS
================================================================= */

/* Clock in Mirror
https://www.codewars.com/kata/clock-in-mirror/train/javascript

Peter can see a clock in the mirror from the place he sits in the office. When he saw the clock shows 12:22
He knows that the time is 11:38

in the same manner:
05:25 --> 06:35
01:50 --> 10:10
11:58 --> 12:02
12:01 --> 11:59

Please complete the function WhatIsTheTime(timeInMirror), where timeInMirror is the mirrored time (what Peter sees) as string.

Return the real time as a string.

Consider hours to be between 1 <= hour < 13.

So there is no 00:20, instead it is 12:20.

There is no 13:20, instead it is 01:20. 

Tags: Fundamentals */

/* =================================================================  
  CODE
================================================================= */

function WhatIsTheTime(timeInMirror) {
  // Get the hour from the given string
  const hour = Number.parseInt(timeInMirror.slice(0, 2), 10);
  console.log({ hour });

  // Get the minutes from the given string
  const min = Number.parseInt(timeInMirror.slice(-2), 10);

  let newHour;

  // 11 - oldHour = newHour
  // Except when oldHour is 12, then newHour is 11
  // and when oldHour is 11, then newHour is 12
  if (hour === 12) {
    newHour = 11;
  } else if (hour === 11) {
    newHour = 12;
  } else {
    newHour = 11 - hour;
    console.log({ newHour });
  }

  // 60 - oldMinutes = newMinutes
  let newMin = 60 - min;
  console.log({ newMin });

  // If you have 60 minutes, then add an hour, and reset minutes to 0.
  if (newMin === 60) {
    newHour += 1;
    newMin = 0;
  }

  // Add 0 if hour is a single digit.
  if (newHour.toString().length === 1) {
    newHour = `0${newHour}`;
    // console.log('hi');
  }

  // Add 0 if minute is a single digit.
  if (newMin.toString().length === 1) {
    newMin = `0${newMin}`;
  }

  return `${newHour}:${newMin}`;
}

/* =================================================================  
  TESTS
================================================================= */

console.log(WhatIsTheTime('06:35')); // 05:25"
// console.log(WhatIsTheTime("11:59")); //12:01"
// console.log(WhatIsTheTime("12:02")); //11:58"

// EDGE CASES
// console.log(WhatIsTheTime("04:00")); //08:00"
// console.log(WhatIsTheTime("06:00")); //06:00"
// console.log(WhatIsTheTime("12:00")); //12:00"

/* =================================================================  
  NOTES
================================================================= */

/* You can use template strings to turn numbers into strings 
newHour = `0${newHour}`; 

Numbers don't have a length property. */
