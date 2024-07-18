/* 
  Given in an alumni interview in 2021.

  String Encode

  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */
function encodeStr(str) {
  // your code here
  let retStr = ""; // initialize a string array to hold the return string
  const strObj = {}; // create an object to hold key value pairs for character and frequency

  let temp = str[0];
  let count = 1;

  // traverse the string
  // for each letter, store its frequency in an object
  for (let i = 1; i < str.length; i++) {
    if (str[i] === temp) { // llok at each character
      count++;              // if character we are at = temp then we add to count
    } else {
      strObj[temp] = count;
      count = 1;
      temp = str[i];
    }
    strObj[temp] = count;

    // traverse the object appending each key value pair to a string
    for (let key in strObj) {
      retStr += key;
      retStr += strObj[key];
    }

    // return the shortest string length
    return retStr.length < str.length ? retStr : str;
  }
}

const result1 = encodeStr(str1);
console.log(`${result1} should equal ${expected1}`);

const result2 = encodeStr(str2);
console.log(`${result2} should equal ${expected2}`);

const result3 = encodeStr(str3);
console.log(`${result3} should equal ${expected3}`);

const result4 = encodeStr(str4);
console.log(`${result4} should equal ${expected4}`);
