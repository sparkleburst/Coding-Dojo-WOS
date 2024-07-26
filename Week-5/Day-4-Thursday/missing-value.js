/* 
  Missing Value

  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

const nums1 = [3, 0, 1];
const expected1 = 2;

const nums2 = [3, 0, 1, 2];
const expected2 = null;
// Explanation: nothing is missing

/* 
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0. 
*/

const nums3 = [2, -4, 0, -3, -2, 1];
const expected3 = -1;

const nums4 = [5, 2, 7, 8, 4, 9, 3];
const expected4 = 6;

/**
 * Determines what the missing int is in the given unordered array of ints
 *    which spans from 0 to N where only one int is missing. With this missing
 *    int, a consecutive sequence of ints could be formed from the array.
 * Bonus: Given ints can span from N to M (start and end anywhere).
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} unorderedNums
 * @returns {number|null} The missing integer needed to be able to form an unbroken
 *    consecutive set of integers from the given array or null if none is missing.
 */
function missingValue(unorderedNums) {
  // your code here
  const nums = [];

  for (let i = 1; i < unorderedNums.length; i++) {
    let min = unorderedNums[0];
    let max = unorderedNums[0];
    let actualSum = 0;

    // Find the min, max and calculate actual sum
    for (let i = 0; i < unorderedNums.length; i++) {
        if (unorderedNums[i] < min) {
            min = unorderedNums[i];
        }
        if (unorderedNums[i] > max) {
            max = unorderedNums[i];
        }
        actualSum += unorderedNums[i];
    }

    // Calculate the expected sum from min to max
    let expectedSum = 0;
    for (let i = min; i <= max; i++) {
        expectedSum += i;
    }

    // The missing number is the difference between expected and actual sums
    const missingNum = expectedSum - actualSum;

    // If the missing number is within the range, return it; otherwise return null
    return (missingNum > min && missingNum < max) ? missingNum : null;
  }
}

console.log(missingValue(nums3)); // Output should be -1
console.log(missingValue(nums4)); // Output should be 6
