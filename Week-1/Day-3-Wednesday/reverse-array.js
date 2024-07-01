//JSDoc

/**
 * This function returns true if the given
 * word is a palindrome and false if it is
 * not.
 * @param {string} word
 */

function isPalindrome(word) {
  // use a while loop
  let start = 0;
  let end = word.length - 1;

  while (start < end) {
    // compare characters at the start and end
    if (word[start] !== word[end]) {
      return false; // if they don't match, it's not a palidrome
    }

    // Move to the center
    start++;
    end--;
  }

  return true; // all characters match. It's a palindrome
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("tiger")); // false

/**
 * Define a function, that given an array
 * reverses the order of the items in that array
 * in place, returning that same array.
 * @param {any[]} arr
 */
function reverseArr(arr) {
  //your code here
  let start = 0;
  let end = arr.length - 1;
                                                
  while (start < end) {
    // swap elements at the start and end
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;    

    // move towards the center
    start++;
    end--;
  }

  return arr;
}

console.log(reverseArr([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArr(["a", "b", "c", "d", "e"])); // ['a', 'b', 'c', 'd', 'e']
