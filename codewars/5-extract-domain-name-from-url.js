// INSTRUCTIONS

/*
Extract the domain name from a URL
https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

// MY SOLUTIONS
/*
Solve by controlling flow with conditional structures (if... else). 
https://github.com/eunicode/algos/blob/c2274b4c61b4c76f2e842bf7d6ce6325c7edac9a/codewars/5-extract-domain-name-from-url.js
The order of if statements is significant.
*/

function domainName(url) {
  let urlStr = url.toLowerCase();
  console.log('original string: ', urlStr)

  const opt1 = /www\./;

  const opt2 = /http:\/\//;
  const opt2_1 = /http:\/\/www\./;

  const opt3 = /https:\/\//;
  const opt3_1 = /https:\/\/www\./;

  if (opt2.test(url) === true) {
    if (opt2_1.test(url) === true) {
      urlStr = urlStr.replace(opt2_1, "");
      console.log("2.1: ", urlStr)
    } 
    else {
      urlStr = urlStr.replace(opt2, "");
      console.log("2: ", urlStr)
    }
  } 

  else if (opt3.test(url) === true) {
    if (opt3_1.test(url) === true) {
      urlStr = urlStr.replace(opt3_1, "");
      console.log("3.1: ", urlStr)
    } 
    else {
      urlStr = urlStr.replace(opt3, "");
      console.log("3: ", urlStr);
    }
  }

  else if (opt1.test(url) === true) {
    urlStr = urlStr.replace(opt1, "");
    console.log("1: ", urlStr);
  } 

  const domain = /[a-z\-\d]+/;

  return urlStr.match(domain).join();
}

console.log(domainName("https://www.1a-l93xok7f4beowp4.biz/error"));

// TESTS

/*
q0viljjfur7suu01bj.br
http://pqxfuvqenmn2hz-3i9a6rcmfebx73.name/img/
https://bsfulg.biz/error
http://www.3nlsavtzh-ste19t5.io/users
https://www.96fjzipxy2agk7v.io/archive/
*/

// FAILED TESTS

/*
https://www.4-zrzm-yf87gh.name/warez/

The problem: ^ This matches both 'https://' and 'https://www.' and 'www.'
I want this case to match 'https://www.' but it also passes true for 'www.' and
gets diverted into that path. 

Solutions: 

- Reorder if conditions from most specific to least specific
Catch 'https://www.' before 'www.'

- Nest if conditions, so start from least specific and drill down to the most specific
If it starts with 'https://', then does it also start with 'http://www.'?

- Divide into two paths, urls that start with 'www.' and urls that start with 'http'
How can we check if the first part of the string is 'www.' or 'http'? 
Slice the string? 
*/

// NOTES

/*
Remember that replace() needs a second argument, what to replace the match with.
Remember that replace() returns a new string, so you have to store the value of 
that string somewhere.

String methods: replace(), match()
Regex methods: test(), exec()

String methods: string.method(regex)
Regex methods: regex.method(string)

const domain = /[a-z\-\d]+/;
Matches letters, dashes, numbers
Escape the dash bc we want the literal dash

*/
