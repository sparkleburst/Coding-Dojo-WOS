/*
Functions are blocks of reusable code that accomplish a task
*/

// Rules of variable and function names:
// 1. Cannot start with a number
// 2. Cannot contain a hyphen
// 3. Cannot use a reserved keyword

// function myFunc1() is okay

// Guideline
// camelCase should be used

// Syntax
// Funcion Declaration

function greeting() {
    // code block
    console.log('Hello!');                            
}

// Function Invocation
// call the function by name
// add parenthesis to invoke it

greeting()

// Parameters and arguments
// If the function requires input, we define
// "parameters" to accept the input

function greetingWithName(name) {
    // code block
    console.log(`Hello ${name}!`);                            
}

// input values are arguments eg 'Max'
greetingWithName('Max');     

function greetingWithNameAndTime(name, timeOfDay) {
    // code block
    console.log(`Good ${timeOfDay}, ${name}!`);                            
}

greetingWithNameAndTime('Max', 'morning')

// Return statement
// function can optionally return a value
// if a function does not return a value
// it returns undefined implicitely

function doesNothing() {
    // this returns undefined
}

console.log(doesNothing());

// Implementing return statements
function greetingWithNameAndTimeWithReturn(name, timeOfDay) {
    return `Good ${timeOfDay}, ${name}`;
}

let maxGreeting = greetingWithNameAndTimeWithReturn('Max', 'evening'));

// The value of a function is whatever that function returns

// when you return a value the return value can escape the function   

console.log(maxGreeting);

// Default parameters
function greetingWithDefaults(name, timeOfDay){
 return `Good ${timeOfDay}, ${name}`;
}

let greetingResult = greetingWithDefaults();
console.log(greetingResult);

// this puts undefined in greetingResult because we didnt remember the argumantes in greetingWithDefauls()

// We can give default values
function greetingWithDefaults(name = 'friend', timeOfDay = 'day'){
    return `Good ${timeOfDay}, ${name}`;
}
   
let greetingResult2 = greetingWithDefaults();
let greetingResult3 = greetingWithDefaults('Mauro', 'afternoon');
console.log(greetingResult2);
console.log(greetingResult3);