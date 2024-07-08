/* 
  insertAt
  Given an array, index, and additional value, ​insert
  the value into the array a​ t the given index. Do this
  without using built-in array methods.
  
  You can think of ​pushFront(arr, val)​ as equivalent to
  insertAt(arr, 0, val)​.
*/

function insertAt(arr, idx, val) {  // we are insering a value into a given array at idx
     
    // your code here
    // we are starting outside of the array
    // let i = arr.length means i starts at 4 
    for (let i = arr.length; i > idx; i--) {
        arr[i] = arr[i - 1];                    
    } 
    arr[idx] = val;
    return arr;
  }

  console.log(insertAt([1, 2, 3, 4], 1, 100));
  
  /* 
    removeAt
    Given an array and an index into the array, remove and
    return the array value ​at that index. Do this without
    using any built-in array methods except ​pop()​.
  
    Think of popFront(arr)​ as equivalent to removeAt(arr, 0).​
  */
  
  function removeAt(arr, idx) { // arguments are an original array and a vlauie for index
    // your code here
    newArr = []; 
    for (let i = 0; i < arr.length; i++) {
        if (i !== idx) { // if index is not same as idx value
            newArr.push(arr[i]); // push value at 
        }
    }
    return newArr;
  }  
  
  console.log(removeAt(['a','b','c','d','e'], 3));