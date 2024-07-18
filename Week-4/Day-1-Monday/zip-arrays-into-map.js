/* 
  Zip Arrays into Map
  
  Given two arrays, create an associative array (aka hash map,
  an object / dictionary) containing keys from the first array,
  and values from the second.

  Assume the arrays will always be the same length.

  Associative arrays are sometimes called maps because a key
  (string) maps to a value 
 */

  const keys1 = ['abc', 3, 'yo'];
  const vals1 = [42, 'wassup', true];
  
  const expected1 = {
    abc: 42,
    3: 'wassup',
    yo: true,
  };
  
  const keys2 = [];
  const vals2 = [];
  const expected2 = {};
  
  /**
   * Converts the given arrays of keys and values into an object.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<string|number>} keys
   * @param {Array<any>} values
   * @returns {Object} The object with the given keys and values.
   */
  function zipArraysIntoMap(keys, values) {
    // your code here

    const objectArray = {};

    for (let i = 0; i < keys.length; i++) {
        objectArray[keys[i]] = values[i];
    }

    return objectArray;
  }

  // Test cases
console.log(zipArraysIntoMap(keys1, vals1)); // Expected output: { abc: 42, 3: 'wassup', yo: true }
console.log(zipArraysIntoMap(keys2, vals2)); // Expected output: {}