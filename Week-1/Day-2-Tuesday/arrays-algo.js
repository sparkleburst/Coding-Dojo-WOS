// Print each array value and the sum so far

let arr = [6, 3, 5, 1, 2, 4]; // the given array
let sum = 0; // for the sum so far
for (let i = 0; i < arr.length; i++) {     
    sum += arr[i]; // sum so far is sum at arr index i
    console.log(`Num ${arr[i]}, Sum ${sum}`); // print values using template literals with backticks 
}

console.log("\n")    

// Multiply each value in the array by its array position

let arr2 = [6, 3, 5, 1, 2, 4];
for (let i = 0; i < arr.length; i++) {     
    arr2[i] *= i;  // modify arr2 at index i by multiplying value at arr2 by index of that value
}
console.log(arr2); // print the modified arr2