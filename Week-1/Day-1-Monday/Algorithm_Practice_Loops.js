// Max Gilhespy

// new line
console.log("\n");

console.log("Start print odds from 1 to 20");

let result = ''; // result will hold a string

for (var i = 1; i <= 20; i++) {
    if (i % 2 !==0) { // if i/2 is not equal to zero
        result += i + ' '; // append i to the result string
    }
}

console.log(result.trim()) // print the result string 
// the trim() method removes trailing space at the end of the string

console.log("End print odds from 1 to 20"); 

// new line
console.log("\n");

console.log("Start sum and print 1 to 5");

let result2 = ''; // result2 will hold a string

sum = 0; // sum must start with a value of zero but can only be zero once

for (let i = 1; i <= 5; i++) {     
    sum += i; // update sum with the current value of i
    result2 += 'Num: ' + i + ', Sum: ' + sum; // append 'Num" and 'Sum' to result2 string
    if (i < 5) {
        result2 += ', '; // add a comma and space if it's not the final iteration
    }
}

console.log(result2); // print the result2 string

console.log("End sum and print 1 to 5");

// new line
console.log("\n");