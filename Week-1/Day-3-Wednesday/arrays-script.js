/*
    Arrays
    Arrays are a reference data type
    with which we can store a collection
    of values.
*/

// create arrays
// array literal notatiom
const colors = ['red', 'orange', 'purple', 'blue'];

// array constructor method
const colors2 = Array('red', 'orange', 'purple', 'blue')

console.log(colors);
console.log(colors2);


console.log(colors === colors2); // false because they are at different memory addresses 

console.log(colors == colors2); // false again because they are at different memory addresses

// get and set values in array
                     
console.log(colors[2]); // purple
console.log(colors[5]); // undefined

// setting values in an array
colors[4] = 'green';
colors.push('yellow');

console.log(colors);

// colors[15] = 'brown';
// console.log(colors);

// useful array methods use colors.
const color = colors.pop()
console.log(colors);
console.log(`the color ${color} was popped`);

colors.reverse();
console.log(colors);