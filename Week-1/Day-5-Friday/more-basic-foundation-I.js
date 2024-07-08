// Max Gilhespy

// The arrow function way

// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

console.log("");
console.log("1. Disply an array from 1 to 255");

// Function declaration 
function from1To255() {
  let numArray = []; // declare the array

  // Iterate from 1 to 255
  for (let i = 1; i <= 255; i++) {
    numArray.push(i); // push current number to end of numArray
  }

  console.log(numArray); // print numArray
}

from1To255(); // Output array from 1 to 255
// Function expression 
const from1To255Expression = function () {
    let numArray = []; // declare the array

  // Iterate from 1 to 255
  for (let i = 1; i <= 255; i++) {
    numArray.push(i); // push current number to end of numArray
  }

  console.log(numArray); // print numArray
}

from1To255Expression(); // Output array from 1 to 255

// Arrow function
const from1To255Arrow = () => {
    let numArray = []; // declare the array

    // Iterate from 1 to 255
    for (let i = 1; i <= 255; i++) {
      numArray.push(i); // push current number to end of numArray
    }
  
    console.log(numArray); // print numArray
}

from1To255Arrow(); // Output array from 1 to 255

// fisrt lets make the arrow functions

// function sumEven1To1000()

