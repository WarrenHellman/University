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