/* eslint-disable */

function mirrorReverse(arr, start, end) {
  let temp = null;

  while (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }

  return arr;
}

function reverseWords(arr) {
  // Reverse all characters
  const len = arr.length; 
  mirrorReverse(arr, 0, len - 1);

  // Reverse each word
  let wordStart = null;

  for (let i = 0; i < len; i++) {
    if (arr[i] == ' ') {
      if (wordStart != null) {
        mirrorReverse(arr, wordStart, i - 1);
        wordStart = null;
      }
    } else if (i == len - 1) {
      if (wordStart != null) {
        mirrorReverse(arr, wordStart, i);
      }
    } else if (wordStart == null) {
        wordStart = i;
      }
  }

  return arr;
}

/*
MIRROR REVERSE FUNCTION

We have a helper function `mirrorReverse` that reverses elements in an array from the startIndex to the endIndex. 

We swap the outer pairs until we get closer and closer to the middle. 
[C, A, T]
[T, A, C]

[D, E, A, R]
[R, E, A, D]
[R, A, E, D]

We have two scenarios, we have an odd number of letters, or an even number of letters. 

In the case of an odd number of letters, [C, A, T]
startIndex is 0. 
endIndex is 2. 
We swap the values at index 0 and index 2. 
Then we increment startIndex
And we decrement endIndex
startIndex becomes 1
endIndex becomes 1
If we have an odd number of letters, we don't need the swap the middle, bc there's only one middle. 
If we have an odd number, startIndex and endIndex will both be 1. 

In the case of an even number of letters, [D, E, A, R]
startIndex: 0 -> 1 -> 2
endIndex: 3 -> 2 -> 1
If we have an even number of letters, once we're done swapping, we're done swapping, bc we don't have any remainders. 
If we have an even number, at the end, startIndex > endIndex

This is why for our while loop, we continue swapping as long as start < end. 
We're given startIndex and endIndex.
We swap the elements at those indices. 
Then we increment/decrement the indices to move inwards. 

--------------------------------------------------------------
REVERSE WORDS FUNCTION

First, we reverse all the elements in the array. 
Now we want to re-reverse the letters in "words". 
['h', 'i', ' ', 't', 'o', 'm']

['m', 'o', 't', ' ', 'i', 'h']
['t', 'o', 'm', ' ', 'h', 'i']

We don't know where the wordStart of our first word is. 
The first element in an array could be a space-string. 
So we set wordStart to null initially. 

Then we iterate the array. 

CASE #1
If the current letter is a space-string,
and if wordStart has a value,
then we know that we have reached the letter after the end of a word. 
So we call mirrorReverse with wordStart and i - 1. 
And we reset wordStart to null 
Note that it's important to use nested if statements, so that our first if statement catches all the cases where the letters that are space-strings. 

CASE #2
If we've reached the end of the array,
and if wordStart has a value,
then that index is the endIndex. 
So we call mirrorReverse with wordStart and i. 

CASE #3
We've been using if and else-if, and our final case is also an else-if. 
This means by default the letter we're currently at is NOT a space-string. 
This is bc if our letter was a space-string, it would have been diverted into the first if block. 

Now, we know our letter is an actual letter. 
But what we want to check is if wordStart is null. 
Because if wordStart is null, that means we recently finished a word.
So the letter that we're currently on is a wordStart. 
*/