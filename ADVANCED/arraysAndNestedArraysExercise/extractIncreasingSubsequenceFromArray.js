function solve(arr) {

    let result = [];
    let currentLargest = arr[0];
 
   for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];
 
        if (currNum >= currentLargest) {
            result.push(currNum);
            currentLargest = currNum;
        }
    }
 
    return result;

}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));