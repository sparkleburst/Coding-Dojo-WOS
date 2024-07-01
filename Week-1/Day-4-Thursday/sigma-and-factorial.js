/*
  Sigma
  Implement a function ​sigma(num)​ that, given a number,
  returns the sum of all positive integers from 1 up to num (inclusive).

  Ex.:
  ​sigma(3) = 6 (or 1 + 2 + 3)
  ​sigma(5)​ = 15 (or 1 + 2 + 3 + 4 + 5)
*/

/**
 *
 * @param {number} num
 * @returns {number}
 */
function sigma(num) {
    // your code
    let sum = 0; // initializes to 0
    for (let i = 1; i <= num; i++){ // starts with i = 1, stops when i = num. iterates by 1
        sum += i; // add i to the sum for each iteration
    }
    return sum;
  }

  console.log(`sigma(3): ${sigma(3)}`); // output 6
  console.log(`sigma(5): ${sigma(5)}`); // output 15
  
  /*
    Factorial
    Write a function ​factorial(num)​ that, given a number,
    returns the product (multiplication) of all positive
    integers from 1 up to num (inclusive).
    
    For example:
    ​factorial(3)​ = 6 (or 1 * 2 * 3)
    factorial(5)​ = 120 (or 1 * 2 * 3 * 4 * 5)
  */
  
  /**
   *
   * @param {number} num
   * @returns {number}
   */
  function factorial(num) {
    // your code
    let product = 1; // initializes to 1
    for (let i = 1; i <= num; i++){ // starts with i = 1, stops when i = num. iterates by 1
        product *= i; // add i to the sum for each iteration
    }
    return product;
  }

  console.log(`factorial(3): ${factorial(3)}`); // output 6
  console.log(`factorial(5): ${factorial(5)}`); // output 120