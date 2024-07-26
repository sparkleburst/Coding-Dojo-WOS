/* 
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else

  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

const nums1 = [3, 5, 4, 3, 4, 6, 5];
const expected1 = 6;

const nums2 = [3, 5, 5];
const expected2 = 3;

const nums3 = [3, 3, 5];
const expected3 = 5;

const nums4 = [5];
const expected4 = 5;

const nums5 = [];
const expected5 = null;

/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */
function firstNonRepeated(nums) {
  // your code here
  // edge case for empty array
  if (nums.length === 0) {
    return null;
  }

  // edge case for array with only one value
  if (nums.length === 1) {
    return nums[0];
  }

  const obj = {}; // create an object to hold the values of the array as the keys and the values
                  // will be a boolean 

  // iterate through the array checking all the elemnets to see if the object has that key
  for (let num of nums) {
    if (obj.hasOwnProperty(num)) {
        obj[num] = false;
    }
    else {
        obj[num] = true;
    }
  }

  for (let key in obj) {
    if (obj[key]){
        return key;
    }
  }

  return null;


}

const result1 = firstNonRepeated(nums1);
console.log(`${result1} should equal ${expected1}`);

const result2 = firstNonRepeated(nums2);
console.log(`${result2} should equal ${expected2}`);

const result3 = firstNonRepeated(nums3);
console.log(`${result3} should equal ${expected3}`);

const result4 = firstNonRepeated(nums4);
console.log(`${result4} should equal ${expected4}`);

const result5 = firstNonRepeated(nums5);
console.log(`${result5} should equal ${expected5}`);