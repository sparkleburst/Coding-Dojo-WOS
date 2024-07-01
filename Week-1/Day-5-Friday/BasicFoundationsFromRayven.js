function from1To255(){
    const retArr = []
    for(var i = 1; i < 256; i++){
        retArr.push(i);
    }
    return retArr;
}

console.log(`1. Get 1 to 255: ${from1To255()}`)

function getEven1000(){
    let sum = 0;
    for(var i = 2; i <= 1000; i+=2){
        sum += i;
    }
    return sum;
}

console.log(`2. Get even 1000: ${getEven1000()}`)

console.log(`3. Sum odd 5000: ${(() => {
    let sum = 0;
    for(let i = 1; i < 5000; i += 2){
        sum += i;
    }
    return sum;
})()}`)

console.log(`4. Iterate an array: ${(() => {
    const arr = [-5, 2, 5, 12]
    let sum = 0;
    for (number of arr) {
        sum += number;
    }
    return sum;
})()}`)

let max = arr => {
    let maxNumber = arr[0]
    for (num of arr){
        maxNumber = (maxNumber < num) ? num: maxNumber 
    }
    return maxNumber;
}
console.log(`5. Find max: ${max([-5, 15, 5, 12])}`)

console.log(`6. Find average: ${(arr => {
    let sum = 0;
    for (num of arr){
        sum += num
    }
    return sum / arr.length;
})([1,3,5,7,20])}`)

function arrayOdd(){
    return (() => {
        const arr = []
        for (let i = 1; i < 50; i += 2)
            arr.push(i);
        return arr;
    })()
}

console.log(`7. Array Odd:: ${arrayOdd()}`)

function greaterThanY(arr, y){
    let counter = 0;
    for (num of arr){
        counter += (num > y) ? 1 : 0; 
    }
    return counter;
}

console.log(`8. Greater than Y: ${greaterThanY([1, 3, 5, 7], 3)}`)

function squares(arr){
    for (num in arr){
        arr[num] = arr[num] ** 2; 
    }
    return arr;
}

console.log(`9. Squares: ${squares([1,5,10,-2])}`)

let negatives = arr => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0)
            arr[i] = 0
    }

}

const arrTest = [1,5,10,-2]
negatives(arrTest)
console.log(`10. Negatives: ${arrTest}`)

function minMaxAvg(arr){
    return [max(arr), 
        (arrParam => {
        let minNumber = arr[0]
        for (num of arrParam){
            minNumber = (minNumber > num) ? num: minNumber 
        }
        return minNumber;})(arr),
        (arrParam => {
            let sum = 0;
            for (num of arrParam){
                sum += num
            }
            return sum / arrParam.length;
        })(arr)
    ]
    

}

console.log()

console.log(`11. Max/Min/Avg: minMaxAvg([1,5,10,-2])`);

let swapValues = arr => {
    let temp = arr[arr.length - 1];
    arr[arr.length - 1] = arr[0];
    arr[0] = temp;
    return arr;
}

console.log(`12. Swap Values: ${swapValues([1,5,10,-2])}`)

function numberToString(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = (arr[i] < 0) ? 'Dojo' : arr[i]
    }
    return arr;
}

console.log(`13. Number to String: ${numberToString([-1, -3, 2])}`)



