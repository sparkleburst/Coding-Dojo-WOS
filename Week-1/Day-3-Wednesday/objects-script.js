/* IRL guitar
   characteristics = color, brand, model, number of strings
   things that it can do - jam, smash, strum, woo
*/

// In Javascript, we call characteristics "properties"
// and we call things that and object can do "methods"

// A method is just a function that belongs to an object.

// creating objects
// object literal syntax
// inside curly braces are key-value pairs

const guitar = {
    color: "blue", 
    brand: "fender",
    model: "Stratocaster",
    numberOfStrings: 6,
};

// check Wednesday day 3 12:05pm for talking about object constructors in Javascript

// get ans set values in an object

// bracket notation


// getting
// console.log(guitar[model]); // error model is not defined
console.log(guitar['model']); // when using bracket syntax the keyname must be a string

// setting
guitar['color'] = 'yellow';
console.log(guitar);

// dot notation 

// getting
console.log(guitar.model);

//setting
guitar.color = 'red';
console.log(guitar);

// adding key-value pairs to an object
// can only use bracket notation
guitar['isNew'] = false
console.log(guitar);

guitar.owner = 'me';
console.log(guitar);

// bracket notation use case
const keyName = 'brand';
console.log(guitar['keyName']); // watch the same video for more info