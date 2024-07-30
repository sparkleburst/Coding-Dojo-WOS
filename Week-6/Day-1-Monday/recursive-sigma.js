/* 
Recursive Sigma

Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1 + 2 + 3 + 4 + 5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1 + 2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num) {
  // base case
  // progression to base case
  // recursive call

  // checking to make sure nothing is left than zero
  // if is less than zero then has to be zero
  if (num <= 0) {
    return 0;
  }

  // we are going from the given number to one
  // when we hit zero we return
  if (num > 0){
    // first call 5 + num - 1 (5+4)
    console.log(`num: ${num}`);
    return num + Math.floor(recursiveSigma(num - 1))
  }

  return Math.floor(num);  
  
}

console.log(recursiveSigma(num1));
console.log(recursiveSigma(num2));
console.log(recursiveSigma(num3));
