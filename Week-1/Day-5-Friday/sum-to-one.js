/* 
  Sum To One Digit
  Implement a function ​sumToOne(num)​ that, given
  a number, sums that number’s digits repeatedly
  until the sum is only one digit. Return that
  final one digit result.

  Ex.
  sumToOne(5) // 5
  sumToOne(20) // 2
  sumToOne(849) // 3
*/

/**
 * This function takes in an integer as input and
 * sums that number’s digits repeatedly until the
 * sum is only one digit.
 * @param {number} num
 * @returns {number}
 */

function sumToOne(num) {
  let str = num.toString;
  let sum = 0;
  for (let char of str) {
    sum += Number(char);
  }
  console.log(`${sum} inside function`);
  if (sum >= 10) {
    console.log(`${sum} >= 10`);
    return sumToOne(sum);
  } else {
    console.log(`${sum} < 10`);
    return sum;
  }
}
console.log(sumToOne(849));

console.log("\n");
console.log("Next one");
console.log("\n");

function sumToOne(num) {
  while (num >= 10) {
    num = num
      .toString() // converts the number to a string
      .split("") // splits it into an array of its digits
      .reduce((acc, digit) => acc + parseInt(digit), 0); // sums up the digits
  }
  return num;
}
// The while loop continues to sum the digits until num is a single digit

// Test cases
console.log(sumToOne(5)); // 5
console.log(sumToOne(20)); // 2
console.log(sumToOne(849)); // 3
