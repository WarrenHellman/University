////////////////////////////////////////////
////////////Evaluation Functions////////////
////////////////////////////////////////////

let re;
re = /hello/;
re = /hello/i;  //i = case insensitive
// re = /hello/g; //g = global search finds all instances


// console.log(re) // gives the full expression
// console.log(re.source) // gives the evaluated expression

// exec() - return result in an array or null 

// const result = re.exec('helo world hello') //matches and returns starting index
// const result = re.exec('helo world helo') // returns null


// console.log(result)
// console.log(result[0])
// console.log(result.index)
// console.log(result.input)

// test() - Returns true or false

// const result = re.test('hello');

// console.log(result)

// match() - return result array or null

// const str = 'hello There';
// const result = str.match(re); //searches  the string for our expression

// console.log(result)

// search() - returns index of first match, if not found returns -1

// const str = 'Hiya, and hello'
// const result = str.search(re);

// console.log(result)

// replace() - Return a new string with some or all matches of a pattern

const str = 'Hello There'

const newStr = str.replace(re, 'hi')
console.log(newStr)


////////////////////////////////////////////
////////////Metacharacter Symbols///////////
////////////////////////////////////////////

let re;
// Literal Characters
re = /hello/
re = /hello/i

// Metacharacter Symbols

re = /^h/i // carat means must start with
re = /d$/i // dolla sign means must end with
re = /^hello$/i   // must start with AND end with (good for routes)
re = /he..o/i     // the period is a wild card for one symbol once

re = /h*llo/i // asterisk matches and character 0 or more times, can be empty
re = /gre?a?y/i //  Means optional, used for ambiguous spellings like gray/grey, matches gry too
re = /[A-Z]ray/  // Matches any uppercase letter
re = /[a-z]ray/  // Matches any lowercase letter
re = /[A-Za-z]ray/  // Matches any letter 
re = /[0-9]ray/  // Matches any number

// Braces {} - Quantifiers

re = /Hel{2}o/  // Matches looks for 2 'L's, must occur {x} amount of times
re = /Hel{2,4}0/  // Gives a range allowing for between 2-4 'L's
re = /Hel{2,}0/  // must occur at least {m} times, in this case at least 2

// Parentheses () - Grouping
re = /([0-9]x{3}){3}/  // Looks for a number and up to 3 'x's, 3 times

// Shorthand Character Classes

re = /\w/;    // word character - alphanumeric or _
re = /\w+/;    // the plus equals 1 or more character
re = /\W/;      // non-word characters for capital W. 
re = /\d/;      // Matches any digit
re = /\d+/;      // Matches all digit
re = /\D/;      // Matches any non-digit
re = /\s/;      // Matches any white space character
re = /\S/;      // Matches any non-white space character
re = /Hell\b/i   // Word Boundary, looks for a solo word so it will only match Hell, not Hello. 

//Assertions
re = /x(?=y)/;  // Matches 'x' only! if followed by 'y', sort of a conditional
re = /x(?!y)/;  // Matches 'x' only if not followed by 'y', sort of a conditional

// String to match
re = /gre?a?y\?/i // the forward slash is an escape character so that it will search for the question mark in 'gray?'

const str = 'Gray?';
const result = re.exec(str);
console.log(result)

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  }
  else {console.log(`${str} does NOT match ${re.source}`);}
}

reTest(re, str)