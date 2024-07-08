/* 
  PushFront
  Given an array and an additional value, ​insert this
  value ​at the beginning of the array in-place. Do this
  without using any built-in array methods. Return the
  modified array.

  pushFront([1, 2, 3, 4], 5)
  [5, 1, 2, 3, 4]
*/

/**
 * pushFront inserts the given value at index 0 of the
 * given array.
 * @param {any[]} arr
 * @param {any} val
 * @returns {any[]}
 */
function pushFront(arr, val) {
    // covering if there are no value in arr
    if (arr.length === 0) {
        arr[0] = val;
        return arr;
    }
    
    let num = arr[0]
    let temp = 0;
    arr[0] = val;

    if(arr.length === 1) {
        arr [1] = num;
        return arr;
    }

    for (let i = 1; i < arr.length; i++) {
        // this moves everything to the right
        temp = arr[i];
        arr[i] = num;
        num = temp;
    }

    arr[arr.length] = num;
    return arr;
  }

  const pushedVal = 5;

  const arr = [1, 2, 3, 4];

  console.log(pushFront(arr, pushedVal));
  
  /* 
    PopFront
    Given an array, ​remove and return the value ​at the
    beginning of the array. Do this without using any
    built-in array methods except ​pop() (if you want)​.
    Mutate the given array in-place.
  
    popFront([1, 2, 3, 4])
    1 <-- removed and returned value
    [2, 3, 4] <-- mutated array
  */
  
  /**
   * popFront removes and returns the value at index 0
   * of the given array.
   * @param {any[]} arr
   * @returns {any}
   */
  function popFront(arr) {
    // your code here
    if (arr.length === 0) {
        return;
    }

    if (arr.length === 1) {
        return arr.pop();
    }

    let num = arr.pop();
    let firstNum = arr[0];
    

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];

    }

    arr[arr.length - 1] = num;
    return firstNum;
  }

  console.log(popFront(arr));
  console.log(arr);