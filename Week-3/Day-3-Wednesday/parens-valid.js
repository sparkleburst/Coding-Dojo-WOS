/*
  Parens (Parentheses) Valid
  Create a function that, given an input string,
  returns a boolean whether parentheses in that
  string are valid.
  
  Given input ​"y(3(p)p(3)r)s"​, return true.
  Given ​"n(0(p)3"​, return ​false​.
  Given ​"n)0(t(0)k"​, return ​false​.
*/

const str1 = 'y(3(p)p(3)r)s';
const expected1 = true;

const str2 = 'n(0(p)3';
const expected2 = false;

const str3 = 'n)0(t(0)k';
const expected3 = false;

/**
 * The function parensValid returns true if the
 * parentheses in the string are valid.
 *
 * @param {string} inputStr the input string to validate.
 * @returns {boolean}
 */
function parensValid(inputStr) { // our function takes in a string
  // your code here
  // first we initialize an array to hold parenthesis 
  const stack = [];

  // we iterate through the array
  for (let i = 0; i < inputStr.length; i++) {
    // we make the value at the current index a variable char
    const char = inputStr[i];

    // if char is an opening parenthesis,                        
    if (char === '(') {
      stack.push(char);
    
    // but if char is a closing parenthesis
    } else if (char === ')') {
      // we check if the array is empty, which means there's no matching opening parenthesis
      if (stack.length === 0) {
        return false; // if ) is first then return false
      } 
      // remove the last element from the array, which should be an opening parenthesis
      stack.pop();
    }
  }

  // if the array is empty, all parentheses were matched correctly
  return stack.length === 0;
}

// tests
const result1 = parensValid(str1);
console.log(`${result1} should equal ${expected1}`);

const result2 = parensValid(str2);
console.log(`${result2} should equal ${expected2}`);

const result3 = parensValid(str3);
console.log(`${result3} should equal ${expected3}`);