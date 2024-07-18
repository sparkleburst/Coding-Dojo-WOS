/* 
  Given an integer to represent how much change is needed,
  calculate the fewest number of coins needed to create
  that change, using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */

//function is to find all the fewest coins we can get in change based on any given #

//set each coin value into a variable
const penny = 1;
  const nickel = 5;
  const dime = 10;
  const quarter = 25;

function fewestCoinChange(cents) {
  // your code here
  // create empty object
  const result = {};

  //creating if statement to check if cents is > or equal to the variable,
  if (cents >= quarter) {
    // we're putting a key value pair into result for the amount of quarters found
    result.quarter = Math.floor(cents / quarter)
    // do cents / quarter and then if the cents parameter has a remainder then cents becomes that amount
    cents %= quarter;
  }

  if (cents >= dime) {
    result.dime = Math.floor(cents / dime)
    cents %= dime;
  }

  if (cents >= nickel) {
    result.nickel = Math.floor(cents / nickel)
    cents %= nickel;
  }

  if (cents >= penny) {
    result.penny = Math.floor(cents / penny)
    cents %= penny;
  }
penny
  return result; 

}

console.log(fewestCoinChange(cents1));
console.log(fewestCoinChange(cents2));
console.log(fewestCoinChange(cents3));
console.log(fewestCoinChange(cents4));