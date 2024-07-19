/* 
  Recreate Object.entries method

  Given an object, return an array of arrays of
  the object's key value pairs, where each key
  value pair is a 2 item array

  Do not include key value pairs from the given
  objects prototype (these are included by default
  when looping over an object's keys)
  obj.hasOwnProperty(key)
*/

const obj1 = {
    name: 'Pizza',
    calories: 9001,
  };
  
  const expected1 = [
    ['name', 'Pizza'],
    ['calories', 9001],
  ];
  
  const proto = { inheritance: 'inherited key', keyOnProto: 'val from proto' };
  
  // This object contains inherited key value pairs from the above proto obj.
  const obj2 = Object.assign(Object.create(proto), {
    firstName: 'Foo',
    lastName: 'Bar',
    age: 13,
  });
  
  const expected2 = [
    ['firstName', 'Foo'],
    ['lastName', 'Bar'],
    ['age', 13],
  ];

//   for (const key in obj2) {
//     console.log(key);
//   }

  // above does not work without incorporating hasOwnProperty  
  
  /**
   * Returns a 2d array of key value pairs from the given obj.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Object} obj
   * @typedef {Array<Array<string, any>>} output The nested array should look
   *    like [key, val]
   * @returns {output}
   */

  // our function takes an object of key value value pairs and returns them as an array of arrays.
  function entries(obj) {
    // your code here
    const result = []; // create an array to hold arrays

    // iterate through all the properties in the object
    for (const key in obj) {
        // if the key is already in the object 
      if (obj.hasOwnProperty(key)) {
        // push the key and the value of the key to the results array we have made
        result.push([key, obj[key]]);
      }
    }
    // then reurn the result
    return result;
  }

  console.log(entries(obj1));
  console.log(entries(obj2));