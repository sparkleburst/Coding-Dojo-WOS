/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums, i = nums.length - 1) {
  // base casecd
  // progression to base case
  // recursive call

  if (nums.length === 0){
    return 0;
  }

  if (nums.length === 1){
    return nums[0];
  }

  if (i < nums.length){
    console.log(nums[i]);
    return (sumArr(nums, i - 1) + nums[i - 1]);
  }

}
sumArr(nums1);
// console.log(sumArr(nums1));
// console.log(sumArr(nums2));
// console.log(sumArr(nums3));