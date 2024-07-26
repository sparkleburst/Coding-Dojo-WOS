/* 
  Balance Index

  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  A balance point is ON an index, not between indices. 
  
  Return -1 if none exist.
  
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [3, 4, 8, 1, 2, 4];
const expected3 = 2;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
  // your code here
  // calculate the total sum of the array
  let totalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }

  // have a sum calculated from the left side to either equal or exceed the total sum (right side)
  let leftSum = 0;
  let rightSum = 0;

  // iterate through the array
  for (let i = 0; i < nums.length; i++) {
    if (leftSum > rightSum) {
      return -1;
    }
    // calculate right sum as totalSum - leftSum - nums[i]
    // we take away the value at i because it is the 'balancer' and is not counted
    rightSum = totalSum - leftSum - nums[i];

    if (leftSum === rightSum) {
      return i;
    }

    // Update leftSum by adding the current element
    leftSum += nums[i];
  }

  // If no balance index is found, return -1
  return -1;
}

const result1 = balanceIndex(nums1);
console.log(`${result1} should equal ${expected1}`);

const result2 = balanceIndex(nums2);
console.log(`${result2} should equal ${expected2}`);

const result3 = balanceIndex(nums3);
console.log(`${result3} should equal ${expected3}`);
