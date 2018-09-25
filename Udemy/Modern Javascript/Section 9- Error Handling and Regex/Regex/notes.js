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