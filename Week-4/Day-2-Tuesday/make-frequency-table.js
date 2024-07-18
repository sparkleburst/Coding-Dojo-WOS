/* 
  Given an array of strings
  return the number of times each string occurs (a frequency / hash table)
*/

const arr1 = ['a', 'a', 'a'];
const expected1 = {
  a: 3,
};

const arr2 = ['a', 'b', 'a', 'c', 'B', 'c', 'c', 'd'];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function makeFrequencyTable(arr) {
  // your code here
  const frequencyTable = {}; // initialize empty frequency table


  // iterate through the array
  for (const char of arr) {
    // if the element has already been found in the frequency table
    if (frequencyTable.hasOwnProperty(char)) {
        frequencyTable[char]++; // increase frequency table by 1
    } else {
        frequencyTable[char] = 1; // element has been found make frequency table 1
    }
  }
  
  // return the frequency table showing amount of times elements occured
  return frequencyTable;
}

console.log(makeFrequencyTable(arr1));
console.log(expected1);