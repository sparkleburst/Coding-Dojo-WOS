/* 
  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.

  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];
//  - order doesn't matter

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */
function mode(nums) {
  // your code here
  const frequencyTable = {}; // create an empty frequency table

  // we iterate through the given array
  for (const num of nums) {
    // if the number is already in the frequency table
    if (frequencyTable[num]) {
        // add 1 to the amount of times number is seen in the table
        frequencyTable[num]++;
    } else  {
        // otherwise the number appears once
        frequencyTable[num] = 1;
    }
  }

  // Find the maximum frequency
  let maxFrequency = 0; // create a variable to hold the maximum frequency

  // iterate through the keys of our frequency table
  for (const key in frequencyTable) {

    // check if the current frequency is the same as the max frequency
    if (frequencyTable[key] > maxFrequency) {
        // if so then assign current frequency to max frequency
        maxFrequency = frequencyTable[key];
    }
  }

  // find all integers that have the maximum frequency
  const result = []; // initialize an empty array to store the result

  // iterate through the keys of our frequency table
  for (const key in frequencyTable) {

    // check if the value of the current key equals max frequency
    if (frequencyTable[key] === maxFrequency) {
        // if so push the value to the result array
        result.push(parseInt(key));
    }
  }
  
  // handle special cases
  // if all unique items occur the same number of times and there is more than one unique item
  if (result.length === Object.keys(frequencyTable).length && result.length > 1) {
    // return an empty array if all items occur the same number of times and there is more than one unique item
    return [];
  }

  return result;
}

console.log(mode(nums1));
console.log(mode(nums2));
console.log(mode(nums3));
console.log(mode(nums4));
console.log(mode(nums5));
