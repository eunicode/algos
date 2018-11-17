/* =================================================================  
  INSTRUCTIONS
================================================================= */

/* 
Lottery Ticket
https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript

Tags: FUNDAMENTALS, STRINGS, NUMBERS, ARRAYS
*/

/* =================================================================  
  SOLUTIONS
================================================================= */

/*
*/

/* =================================================================  
  CODE
================================================================= */

function bingo(ticket, win) {
    let count = 0;

    ticket.forEach(elm => {
        const str = elm[0];
        const codepoint = elm[1]; 
        const letter = String.fromCharCode(codepoint);
        // console.log({ letter });

        if (str.includes(letter)) {
            count += 1;
        }
    });

    if (count >= win) {
        return 'Winner!';
    } else {
        return 'Loser!';
    }
}

/* =================================================================  
  TESTS
================================================================= */

// console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2));
// 'Loser!'

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1));
// 'Winner!'

// console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3));
// 'Loser!'

/* =================================================================  
  NOTES
================================================================= */ 

/* 
Glyph --> (Font)          --> Code Point --> (Encoding) --> Bytes
😯    --> Apple Emoji Set --> U+1f62e    --> UTF-8      --> f0 9f 98 ae

Character set = maps characters and code points. Examples: Unicode

Code point = "Number". 
Hexadecimal code point: U+1F62E = 😯, U+0041 = A
Decimal code point: 128558 = 😯, 65 = A

Character encoding = Converts bytes to code points and vice versa. Examples: UTF-8, UTF-16

List of Unicode characters
https://en.wikipedia.org/wiki/List_of_Unicode_characters

Face with Open Mouth
https://www.iemoji.com/view/emoji/895/smileys-people/face-with-open-mouth
*/

/* =================================================================  
  TO DO
================================================================= */ 

/* 
*/

/*
--------------------------------------------------------------------
*/