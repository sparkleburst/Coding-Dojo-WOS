// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

function oddOccurrencesInArray(nums) {
  // your code here
  const frequencyTable = {}; // initialize empty frequency table


  // iterate through the array
  for (const char of nums) {
    // if the element has already been found in the frequency table
    if (frequencyTable.hasOwnProperty(char)) {
        frequencyTable[char]++; // increase frequency table by 1
    } else {
        frequencyTable[char] = 1; // element has been found make frequency table 1
    }
  }
  
  
  // return the frequency table showing amount of times elements occured
  return frequencyTable;

}

console.log(oddOccurrencesInArray(nums1), 'should equal', expected1);
console.log(oddOccurrencesInArray(nums2), 'should equal', expected2);
console.log(oddOccurrencesInArray(nums3), 'should equal', expected3);
console.log(oddOccurrencesInArray(nums4), 'should equal', expected4);