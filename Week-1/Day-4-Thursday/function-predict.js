// Max Gilhespy

// Predict 1

// Function definition for greeting
function greeting() {
  // Returns the string "Hello" and exits the function
  return "Hello";
  // This line will never be executed because the function has already returned
  console.log("World");
}
// Call the greeting function and store the result in the variable 'word'
var word = greeting();
// Print the value of 'word' to the console
console.log(word);

// Predict 2

// Function definition for add
function add(num1, num2) {
  // Logs a message indicating that numbers are being summed
  console.log("Summing Numbers!");
  // Logs the value of num1
  console.log("num1 is: " + num1);
  // Logs the value of num2
  console.log("num2 is: " + num2);
  // Calculates the sum of num1 and num2 and stores it in the variable 'sum'
  var sum = num1 + num2;
  // Returns the value of 'sum'
  return sum;
}
// Call the add function with arguments 3 and 5, and store the result in 'result1'
var result1 = add(3, 5);
// Call the add function with arguments 4 and 7, and store the result in 'result2'
var result2 = add(4, 7);
// Print the value of 'result1' to the console
console.log(result1); // Output: 8
// Print the value of 'result2' to the console
console.log(result2); // Output: 11

// Predict 3

// Function definition for highFive
function highFive(num) {
  // Loop from 0 to num-1
  for (var i = 0; i < num; i++) {
    // If i is equal to 5, print "High Five!"
    if (i == 5) {
      console.log("High Five!");
    }
    // Otherwise, print the value of i
    else {
      console.log(i);
    }
  }
}

// Note: The function highFive is defined but not called, 
// so it will not produce any output until it is invoked.
