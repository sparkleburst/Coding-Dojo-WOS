// Max Gilhespy

// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

console.log("");
console.log(
  "1. Given an array. Change any positive numbers in that array into the word 'big'."
);

function makeItBig(array) {
  // iterate the array
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      // if the current array value is greater than zero
      array[i] = "big"; // replce current array value with 'big'
    }
  }
  return array; // return the modified array
}

const array = [-2, 5, 8, -13, 25]; // declare an array

// this is a copy of the original array for display purposes
const originalArray = [...array];
// '...array' take the values from 'array' and puts then in a new array which is a copy of the original but is independent of array in terms of memory reference

// the modifiedArray is for display purposes only
const modifiedArray = makeItBig(array);

// display both the original and modified arrays for testing
console.log(`The original array: [${originalArray.join(", ")}]`);
console.log(`The modified array: [${modifiedArray.join(", ")}]`);
// Array.join converts all elements of the array into a string, separated by a specified separator (in this case, ", ").

// print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

console.log("");
console.log(
  "2. Given an array. Use a function to print out the lowest value and to return the highest value."
);

function numbersArray(array) {
  // using the spread syntax ...arr, the array [-2, 5, 8, -13, 25] is expanded to -2, 5, 8, -13, 25 and now we can iterate over the values.

  // so, Math.min(...arr) is the same as Math.min(-2, 5, 8, -13, 25), which returns the lowest value, -13.
  console.log(`The lowest value in the array: ${Math.min(...array)}`); // print the lowest value
  return Math.max(...array); // return the highest value
}

const array2 = [-2, 5, 8, -13, 25]; // declare an array
console.log(`Here is an array: [${array2.join(", ")}]`); // print the array
// a variable to store the returned value for testing purposes
// let returnedValue = numbersArray(array2);
// call the function
numbersArray(array2);
// for testing show the returned value
// console.log(`The highest value in the array is: ${returnedValue}`);

// Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

console.log("");
console.log(
  "3. Given an array. Use a function to print the second-to-last value, and to return the first odd value."
);

function printReturn(array) {
  const oddArray = []; // array to hold odd values
  console.log(
    `The second-to-last value in the array is: ${array[array.length - 2]}`
  ); // print the second-to-last value
  // iterate the array
  for (let i = 0; i < array.length; i++) {
    if (i % 2 != 0) {
      // if the remainder of i divided by 2 is not zero
      oddArray.push(array[i]); // add the current value the end of array
    }
  }
  return oddArray[0];
}

const array3 = [-2, 5, 8, -13, 25]; // declare an array
console.log(`Here is an array: [${array3.join(", ")}]`); // print the array
// a variable to store the returned value for testing purposes
// let returnedValue = printReturn(array3);
// call the function
printReturn(array3);
// for testing show the returned value
// console.log(`The first odd value in the array is: ${returnedValue}`);

// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

console.log("");
console.log(
  "4. Given an array. Use a function to return a new array where each value in the original array has been doubled."
);

function double(array) {
  const doubleArray = []; // array to hold doubled values
  // iterate the array
  for (let value of array) {
    doubleArray.push(value * 2);
  }
  return doubleArray;
}

const array4 = [-2, 5, 8, -13, 25]; // declare an array
console.log(`Here is an array: [${array4.join(", ")}]`); // print the array
// a variable to store the returned array for testing purposes
let returnedArray = double(array4);
// call the function
// double(array4);
// for testing show the returned value
console.log(
  `The new returned array with each value doubled is: [${returnedArray.join(
    ", "
  )}]`
);

// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

console.log("");
console.log(
  "5. Given an array. Replace the last value in the array with number of positive values found in the array."
);

function howManyPositives(array) {
  let count = 0; // declare a count variable
  // iterate the array
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      count++;
    }
  }
  array[array.length - 1] = count;
  return array;
}

const array5 = [-2, 5, 8, -13, 25]; // declare an array
// this is a copy of the original array for display purposes
const originalArray2 = [...array5];
// console.log(`Here is an array: [${originalArray2.join(", ")}]`); // print the original array

// the modifiedArray is for display purposes only
const modifiedArray2 = howManyPositives(array5);

// display both the original and modified arrays for testing
console.log(`The original array: [${originalArray2.join(", ")}]`);
console.log(`The modified array: [${modifiedArray2.join(", ")}]`);

// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

console.log("");
console.log(
  "6. Given an array. Every time that array has three odd values in a row, print 'That's odd!'.  Every time the array has three evens in a row, print 'Even more so!'."
);

function evensAndOdds(array) {
  let oddCount = 0; // declare a count variable for odd numbers
  let evenCount = 0; // declare a count variable for even numbers
  // iterate the array
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      // if the current value is odd
      oddCount++; // add 1 to oddCount
      evenCount = 0; // reset the even counter
      if (oddCount === 3) {
        // if there have been 3 odd values in a row
        console.log("That's odd!"); // print "That's odd!"
        oddCount = 0; // reset the odd counter
      }
    } else {
      // if the current value is even
      evenCount++; // add 1 to evenCount
      oddCount = 0; // reset the odd counter
      if (evenCount === 3) {
        // if there have been 3 odd values in a row
        console.log("Even more so!"); // print "Even more so!"
        evenCount = 0; // reset the even counter
      }
    }
  }
}

const array6 = [3, 4, 5, 7, 9, 2, 3, 6, 8, 4]; // declare an array
console.log(`Here is an array: [${array6.join(", ")}]`); // print the array
// call the function
evensAndOdds(array6);

// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

console.log("");
console.log(
  "7. Given an array of numbers arr, add 1 to every other element. Afterward, console.log each array value and return arr."
);

function addOnetoOdd(arr) {
  // iterate the array
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      // if the index is odd
      arr[i]++; // add 1 to the value at that index      
    }
    console.log(arr[i]); // console.log each array value    
  }
  return arr; // return the modified arr
}

const arr = [-2, 5, 8, -13, 25]; // declare an array
// call the function
addOnetoOdd(arr);
// show the returned array for testing purposes
console.log(arr);

// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

console.log("");
console.log(
  "8. Given an array of strings, replace each string with a number - the length of the string at the previous array index - and return the array."
);

function previousLengths(stringArray) {
  const tempArray = []; // declare an array to hold string lengths
  // iterate the array
  for (let i = 0; i < stringArray.length; i++) {
    tempArray.push(stringArray[i].length); // fill the tempArray array with lengths of stringArray strings
  }
  // iterate the array backwards
  for (let i = stringArray.length - 1; i >= 1; i--) {
    stringArray[i] = tempArray[i - 1]; // fill the stringArray array with tempArray values except the first
  }
  return stringArray; // return the modified array
}

const stringArray = ["hello", "dojo", "awesome", "max", "dragon"]; // declare a string array

// this is a copy of the original array for display purposes
const originalArray3 = [...stringArray];

// the modifiedArray is for display purposes only
const modifiedArray3 = previousLengths(stringArray);

// display both the original and modified arrays for testing
console.log(`The original array: [${originalArray3.join(", ")}]`);
console.log(`The modified array: [${modifiedArray3.join(", ")}]`);

// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

console.log("");
console.log(
  "9. Given an array, in the function return a new array with all the values of the original, but add 7 to each."
);

function addSeven(array) {
  const addSeven = []; // declare a new array for adding seven
  // iterate the given array
  for (let value of array){
    addSeven.push(value + 7); // add seven to current value in array
  }
  return addSeven; // return the new array
}

const array7 = [-2, 5, 8, -13, 25]; // declare an array
const returnedAddSeven = addSeven(array7) // declare an array to hole the returned array

// display both the original and modified arrays for testing
console.log(`The original array: [${array7.join(", ")}]`); // print the original array
console.log(`The returned array: [${returnedAddSeven.join(", ")}]`); // print the new returned array

// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

console.log("");
console.log(
  "10. Given an array, write a function that reverses its values, in-place."
);

function reverseArray(array) {
  let leftIndex = 0; 
  let rightIndex = array.length - 1;

  // swap the elements using tempValue
  while (leftIndex < rightIndex) {
    let tempValue = array[leftIndex]; 
    array[leftIndex] = array[rightIndex]; 
    array[rightIndex] = tempValue; 

  // move indices to the middle
  leftIndex++;
  rightIndex--;
  }

  return array;
}

const array8 = [-2, 5, 8, -13, 25]; // declare an array

// this is a copy of the original array for display purposes
const originalArray4 = [...array8];
// the modifiedArray is for display purposes only
const modifiedArray4 = reverseArray(array8);

// display both the original and modified arrays for testing
console.log(`The original array: [${originalArray4.join(", ")}]`);
console.log(`The modified array: [${modifiedArray4.join(", ")}]`);

// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

console.log("");
console.log(
  "11. Given an array, create and return a new array containing all the values of the original array, but make all the values negative."
);

function negative(array) {
  const allNegative = []; // declare a new array for holding negative values
  // iterate the given array
  for (let value of array){
    if (value > 0){ // if the current value is positive
      // console.log(value);
      value *= -1; // make the current value negative
    } 
    allNegative.push(value);
  }
  return allNegative; // return the new array
}

const array9 = [-2, 5, 8, -13, 25]; // declare an array
const allNegative = negative(array9) // declare an array to hold the returned array

// display both the original and modified arrays for testing
console.log(`The original array: [${array9.join(", ")}]`); // print the original array
console.log(`The new returned array: [${allNegative.join(", ")}]`); // print the new returned array

// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

console.log("");
console.log(
  "12. Given an array, print 'yummy' each time one of the values is equal to 'food'.  If no array values are 'food', then print 'I'm hungry' once."
);

function alwaysHungry(array) {
let hasFood = false; // declare a boolean to track whether or not food has been found

  // iterate the array
  for (let value of array){
    if (value === "food") { // if 'food' is a value in the array
      console.log("yummy"); // print yummy
      hasFood = true; // make hasFood true
    } 
    
  }

  if (!hasFood){ // if hasFood is false
    console.log("I'm hungry"); // print 'I'm hungry'
  }
}

const array10 = ["food", "cat", 8, "food", "dog"]; // declare an array
const array11 = ["mouse", "cat", 8, 17, "dog"]; // declare an array

console.log(`Here is an array: [${array10.join(", ")}]`); // print array10
// call the function
alwaysHungry(array10); // output 'yummy' 'yummy'

console.log(`Here is an array: [${array11.join(", ")}]`); // print array11
// call the function
alwaysHungry(array11); // output 'I'm hungry'

// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

console.log("");
console.log(
  "13. Given an array, swap the first and last values, third and third-to-last values, etc."
);

function swapTowardCenter(array) {
  console.log(`The original array: [${array.join(", ")}]`);

  let leftIndex = 0; // declare a variable to represent left index
  let rightIndex = array.length - 1; // declare a variable to represent right index

  // swap the elements using tempValue
  while (leftIndex < rightIndex) {
    let tempValue = array[leftIndex]; 
    array[leftIndex] = array[rightIndex]; 
    array[rightIndex] = tempValue; 

  // move indices to the middle
  leftIndex += 2;
  rightIndex -= 2;
  }
  console.log(`The modified array: [${array}]`);
}

const array12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // declare an array
// call the function
swapTowardCenter(array12);

// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

console.log("");
console.log(
  "13. Given an array and a number, multiply all values in the array arr by the number num, and return the changed array arr."
);

function scaleArray(arr, num) {
  // iterate the array
  for (let i = 0; i < arr.length; i++){
    arr[i] *= num; // multiply current array value by num;
    //console.log(arr[i]);
  }
  //console.log(arr);
  return arr;
}

const arr2 = [-2, 5, 8, -13, 25]; // declare an array

let num = 3; // declare the number variable

// this is a copy of the original array for display purposes
const originalArray5 = [...arr2];
// call the function
scaleArray(arr2, num);

// display both the original and modified arrays for testing
console.log(`The original array: [${originalArray5.join(", ")}]`);
console.log(`The modified array: [${arr2.join(", ")}]`);
