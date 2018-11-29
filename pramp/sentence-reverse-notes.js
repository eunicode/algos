/* =================================================================  
  NOTES
================================================================= */

/* 
Why aren't semicolons allowed in console.log()?

--------------------------------------------------------------------
SPLIT() GOTCHAS

console.log(reverseWords(["a", " ", " ", "b"]));

This test was failing bc of this combination of code:  
const str = arr.join('');
const splitArr = str.split(' ');
This does not preserve space elements in the array

var arr = ['a', ' ', ' ', 'b'];
var emptyStr = arr.join('').split(' '); // ['a', '', 'b']
var dash = arr.join('').split(''); // ['a', ' ', ' ', 'b']

The problem is split(). 
'a   b'.split(' '); // ['a', '', '', 'b']
The string has three spaces, but we're only getting two empty strings. 
Explanation: 
We're splitting by spaces, every time there's a space, we replace it with a `,`
Visualize the string like this: 
a emptystring space emptystring space emptystring space emptystring b
It gets chopped up like this: 
a emptystring / emptystring / emptystring / emptystring b
There is always an empty string between two characters. 

--------------------------------------------------------------------
join('') = a  b'
join('-') = 'a- - -b'

--------------------------------------------------------------------
SPLIT STRING BY WHITE SPACE

JavaScript split String with white space
https://stackoverflow.com/questions/26425637/javascript-split-string-with-white-space

var str   = "my car is red";
var stringArray = str.split(/(\s+)/);

console.log(stringArray); // ["my", " ", "car", " ", "is", " ", "red"]

--------------------------------------------------------------------
SPLIT + REGEX + CAPTURING GROUPS

Why does this fail tests? 
const splitArr = str.split(/\s+/);

["a"," "," ","b"] // [b, a]
["p","e","r","f","e","c","t"," ","m","a","k","e","s"," ","p","r","a","c","t","i","c","e"]
// [p,e,r,f,e,c,t,m,a,k,e,s,p,r,a,c,t,i,c,e]

No capturing group means no spaces. 

Use of capture groups in String.split() [duplicate]
https://stackoverflow.com/questions/21419530/use-of-capture-groups-in-string-split

split keeps capturing groups. That's why you see it in the result.
Look at MDN split().

javascript regex split produces too many items
https://stackoverflow.com/questions/17516040/javascript-regex-split-produces-too-many-items

That's because split does also push capturing groups to the result array:

If separator is a regular expression that contains capturing parentheses, 
then each time separator is matched, 
the results (including any undefined results) of the capturing parentheses are spliced into the output array.

*/
