/* 
  Acronyms

  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 

  Do it with built-ins like .split first if you need to, then try to do it without
*/

const str1 = 'object oriented programming';
const expected1 = 'OOP';

// The 4 pillars of OOP
const str2 = 'abstraction polymorphism inheritance encapsulation';
const expected2 = 'APIE';

const str3 =
  'parentheses exponents multiplication division addition subtraction';
const expected3 = 'PEMDAS';

// Bonus: ignore extra spaces
const str4 = '  global   information tracker    ';
const expected4 = 'GIT';

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(wordsStr) {
// this function will look at a string of words and take the first letter and capitalize it
  // your code here
  let acronym = ''; // declaring a string to hold the capitals
  let inWord = false; // needed to determine if letter are inside the word

  for (let i = 0; i < wordsStr.length; i++) {
    // if the first letter of the word - defined by not being a space and not being in the word
    if (wordsStr[i] !== ' ' && !inWord) { 
      // we are adding the capitalized first letter to the string acronym
      acronym += wordsStr[i].toUpperCase(); 
      inWord = true;
    } else if (wordsStr[i] === ' ') {
      // if we are at a space then we are before or inbetween words
      // the next letter we hit is the beginning of the next word
      inWord = false;
    }
  }
  return acronym; // then we return the string acronym
}

// Tests
const result1 = acronymize(str1);
console.log(result1, 'should equal', expected1);

const result2 = acronymize(str2);
console.log(result2, 'should equal', expected2);

const result3 = acronymize(str3);
console.log(result3, 'should equal', expected3);

const result4 = acronymize(str4);
console.log(result4, 'should equal', expected4);

/*
function acronymize(wordsStr) {
    let acronym = '';
    const wordsArray = wordsStr.trim().split(" ");

    for (word of wordsArray) {
        acronym += word.toUpperCase().split("", 1);
    }
    return acronym;
}
    */