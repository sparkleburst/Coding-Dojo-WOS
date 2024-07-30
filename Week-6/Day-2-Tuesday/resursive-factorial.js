/* 
  Recursive Factorial

  Input: integer
  Output: integer, product of ints from 1 up to given integer
  
  If less than zero, treat as zero.
  Bonus: If not integer, truncate (remove decimals).
  
  Experts tell us 0! is 1.
  
  rFact(3) = 6 (1 * 2 * 3)
  rFact(6.8) = 720 (1 * 2 * 3 * 4 * 5 * 6)
*/

const num1 = 3;
const expected1 = 6;
// Explanation: 1 * 2 * 3 = 6

const num2 = 6.8;
const expected2 = 720;
// Explanation: 1 * 2 * 3 * 4 * 5 * 6 = 720

const num3 = 0;
const expected3 = 1;

/**
 * Recursively multiples 1 to the given int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} n The int to factorial. Treat negatives as zero and
 *    floor decimals.
 * @returns {number} The result of !n.
 */
function rFactorial(n) {
  // your code here
  // treat negatives as zero
  if (n < 0) {
    n = 0;
  }

  // truncate decimals
  // make it a whole number by cutting off anything after the decimal point
  n = Math.floor(n);

  // base case: 0! = 1
  if (n === 0) {
    return 1;    
  }

  // recursive case
  return n * rFactorial(n-1);  
}

const result1 = rFactorial(num1);
console.log(`${result1} should equal ${expected1}`);

const result2 = rFactorial(num2);
console.log(`${result2} should equal ${expected2}`);

const result3 = rFactorial(num3);
console.log(`${result3} should equal ${expected3}`);