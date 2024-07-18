/*
  Braces Valid
  Given a string, returns whether the sequence
  of various parentheses, braces and brackets
  within it are valid.
  
  For example:
  Given the input string "w(a{t}s[o(n{c}o)m]e)h[e{r}e]!"​, return true​
  Given ​"d(i{a}l[t]o)n{e"​, return false​
  Given ​"a(1)s[O(n]0{t)0}k"​, return false​
*/

const str1 = 'w(a{t}s[o(n{c}o)m]e)h[e{r}e]!';
const expected1 = true;

const str2 = 'd(i{a}l[t]o)n{e';
const expected2 = false;

const str3 = 'a(1)s[O(n]0{t)0}k';
const expected3 = false;

/**
 * The function parensValid returns true if the
 * braces in the string are valid.
 *
 * @param {string} inputStr the input string to validate
 * @returns {boolean}
 */
function bracesValid(inputStr) {
  // your code here
  // first we initialize an array to hold parenthesis
  const stack = [];
  // using a object to compare key value pairs
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  // we iterate through the array
  for (let i = 0; i < stack.length; i++) {
    // check if the current character is an opening bracket by looking it up in the map
    if (map[s[i]]) { // if the current character at s[i] is a key in the map object
        stack.push(s[i]); // push it onto the array  
    } else {
        const top = stack.pop();
        if (map[top] !== s[i]) {
            return false;
        }
    }
  }
  return stack.length === 0;
}

// tests
const result1 = bracesValid(str1);
console.log(`${result1} should equal ${expected1}`);

const result2 = bracesValid(str2);
console.log(`${result2} should equal ${expected2}`);

const result3 = bracesValid(str3);
console.log(`${result3} should equal ${expected3}`);