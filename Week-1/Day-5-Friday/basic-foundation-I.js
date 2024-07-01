// Max Gilhespy

// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

console.log("");
console.log("1. Disply an array from 1 to 255");

function from1To255() {
  let numArray = []; // declare the array

  // Iterate from 1 to 255
  for (let i = 1; i <= 255; i++) {
    numArray.push(i); // push current number to end of numArray
  }

  console.log(numArray); // print numArray
}

from1To255(); // Output array from 1 to 255

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

console.log("");
console.log("2. Display the sum of even numbers from 1 to 1000");

function sumEven1To1000() {
  let sum = 0; // declare the sum variable

  // Iterate from 1 to 1000
  for (let i = 0; i <= 1000; i += 2) {
    sum += i; // add current i value to sum
  }

  console.log(`The sum of all even numbers from 1 to 1000 is ${sum}`);
}

sumEven1To1000(); // Output 250500

// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

console.log("");
console.log("3. Display the sum of odd numbers from 1 to 5000");

function sumOdd1To5000() {
  let sum = 0; // declare the sum variable

  // Iterate from 1 to 5000
  for (let i = 1; i <= 5000; i += 2) {
    sum += i; // add current i value to sum
  }

  console.log(`The sum of all odd numbers from 1 to 5000 is ${sum}`);
}

sumOdd1To5000(); // Output 6250000

// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

console.log("");
console.log(
  "4. Iterate an array and get the sum of all numbers within that array"
);

function iterateAndSum(array) {
  let sum = 0; // declare the sum variable

  // Iterate the array
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i]; // add current array index value to sum
  }

  return sum; // return the sum
}

console.log(
  `The sum of all numbers in the array [1, 2, 3, 4, 5] is ${iterateAndSum([
    1,
    2,
    3,
    4,
    5,
  ])}`
); // Output 15

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

console.log("");
console.log("5. Find the largest number within an array");

// Iterate the array
function findMaxOfArray(array) {
  //let max = Math.max(...array);
  //return max;
  return Math.max(...array); // return the largest number
}

// Using the spread syntax ...arr, the array [3, 1, 4, 1, 5, 9, 2, 6, 5, 3] is expanded to 3, 1, 4, 1, 5, 9, 2, 6, 5, 3 and now we can iterate over the values.

// So, Math.max(...arr) is the same as Math.max(3, 1, 4, 1, 5, 9, 2, 6, 5, 3), which returns the largest number, 9.

const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];

console.log(
  `The largest number in the array [3, 1, 4, 1, 5, 9, 2, 6, 5, 3] is ${findMaxOfArray(
    array
  )}`
); // Output 9

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

console.log("");
console.log("6. Find the average of numbers in an array");

function findAverageOfArray(array) {
  let sum = 0; // declare the sum variable

  // Iterate the array
  for (let i = 0; i < array.length; i++) {
    sum += array[i]; // add current array index value to sum
  }
  // console.log(`The sum is ${sum}`);
  return sum / array.length; // divide sum by amount of numbers in array
}

const array2 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];

console.log(
  `The average of the numbers in the array [3, 1, 4, 1, 5, 9, 2, 6, 5, 3] is ${findAverageOfArray(
    array2
  )}`
); // Output 3.9

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

console.log("");
console.log("7. Show only the odd numbers in an array between 1 and 50");

function oddNumbersIn1To50() {
  // declare an array to store the odd numbers
  const oneToFiftyOdds = [];

  // Iterate the array
  for (let i = 1; i <= 50; i += 2) {
    oneToFiftyOdds.push(i); // each number will be odd. Add it to the end of array
  }
  // Array.join converts all elements of the array into a string, separated by a specified separator (in this case, ", ").
  console.log(
    `The odd numbers in the numbers from 1 to 50 are:\n${oneToFiftyOdds.join(
      ", "
    )}`
  );
}

oddNumbersIn1To50(); // Output all the odds numbers from 1 - 50

// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

console.log("");
console.log(
  "8. Use a given value and compare to an array.\nPrint how many values in the array are greater than the given value"
);

function greaterThanY(array, given) {
  let count = 0; // declare a count variable

  // Iterate the array
  for (let value of array) {
    if (value > given) {
      // if the array value is larger than the given value
      count++; // add 1 to count
    }
  }
  return count; // return the count value
}

const array3 = [2, 5, 8, 13, 25]; // declare an array
const yValue = 7; // declare a variable for yValue
console.log(
  `In the array [${array3.join(", ")}] there are ${greaterThanY(
    array3,
    yValue
  )} values greater than ${yValue}`
); // Output 3 values greater

// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

console.log("");
console.log(
  "9. Take an array and replace each value in the array with that value squared"
);

function squaredArrayValues(array) {
  // decalre an array to store squared numbers
  let squaredArray = [];

  // Iterate the array
  for (let value of array) {
    value = Math.pow(value, 2); // square the current value
    squaredArray.push(value); // add the value to the end of squaredArray
  }
  return squaredArray.join(", "); // return the array of squared values
}

const array4 = [2, 5, 8, 13, 25]; // declare an array
console.log(
  `The values in the array [${array4.join(
    ", "
  )}] have been squared and are now [${squaredArrayValues(array4)}]`
); // Output squares 4, 25, 64, 169, 625

// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

console.log("");
console.log(
  "10. Replace all negative numbers within an array with the value of 0"
);

function replaceNegatives(array) {
  // Iterate the array
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      // If the current array value is less than zero
      array[i] = 0; // replace the current value with zero
    }
  }
  return array.join(", "); // return the array
}

const array5 = [-2, 5, 8, -13, 25]; // declare an array
console.log(
  `The negative values in the array [${array5.join(
    ", "
  )}] have been swapped with zeros!\n Here is the array now: [${replaceNegatives(
    array5
  )}]`
); // output 0,5,8,0,25 for the modified array

// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

console.log("");
console.log(
  "11. Use one array to form another array that only contains the \nmaximum, minimum, and average values of the original array. "
);

function maxMinAverage(array) {
  const maxMinAveArray = [];
  {
    let sum = 0; // declate the sum variable

    // Iterate the array
    for (let value of array) {
      sum += value; // add current value to sum
    }
    maxMinAveArray.push(Math.max(...array)); // add the largest value to the end of maxMinAveArray
    maxMinAveArray.push(Math.min(...array)); // add the smallest value to the end of maxMinAveArray
    maxMinAveArray.push(sum / array.length); // add the average value to the end of maxMinAveArray
  }
  return maxMinAveArray; // return the array with the largest, smallest and average values
}

const array6 = [-2, 5, 8, -13, 25]; // declare an array
const maxMinAveArray = maxMinAverage(array6); // declare maxMinAveArray outside of the function and add the return values to it
console.log(
  `The array [${array6.join(
    ", "
  )}] has the maximum, minimum and average values of [${maxMinAveArray.join(
    ", "
  )}]`
); // output 25,-13,4.6 to show the largest, smallest and average values of array6

// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

console.log("");
console.log(
  "12. Given an array of two or more values, swap the first and the last value. "
);

function swapFirstAndLast(array) {
  console.log(`Here is an array: [${array.join(", ")}].`);
  if (array.length < 2) {
    // the invalid message
    console.log(`The array [${array.join(", ")}] does not have at least 2 values.`);
    return;
  } else {
    let tempF = array[0]; // declare a temporary variable and assign the first value in the array to it
    array[0] = array[array.length - 1]; // assign the last value in the array to the first position
    array[array.length - 1] = tempF; // assign the temporary value (original first value) to the last position in the array

    console.log(
      `Here is the same array with the first and last values swapped [${array.join(", ")}]`
    );
  }
}

//Test cases
const array7 = [-2, 5, 8, -13, 25]; // declare an array
swapFirstAndLast(array7); // output 25,5,8,-13,-2
const array8 = ["Max", "Irina", "Rayven", "Ciso"]; // declare an array
swapFirstAndLast(array8); // output Ciso,Irina,Rayven,Max
const array9 = [-2, "Cat", 5, 8, -13, 25, "Dog"]; // declare an array
swapFirstAndLast(array9); // output Dog,Cat,5,8,-13,25,-2
const array10 = ["One"]; // declare an array
swapFirstAndLast(array10); // output the invalid message

// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

console.log("");
console.log(
  "13. Given an array. Change any negative numbers into the word 'Dojo'."
);

function negativeToDojo(array) {
  // Iterate the array
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) { // if the current array value is less than zero
      array[i] = "Dojo"; // replce current array value with Dojo 
    }
  }
  return array.join(", "); // return the modified array
}

const array11 = [-2, 5, 8, -13, 25]; // declare an array
console.log(
  `The original array is: [${array11.join(
    ", "
  )}]\nThe modified array is: [${negativeToDojo(array11)}]`
); // Output Dojo,5,8,Dojo,25 for the modified array
