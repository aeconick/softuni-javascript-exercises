function sorting(arr) {
    let sortedArr = arr.sort((a, b) => a - b); // [1, 2, 3, 18, 21, 31, 52, 63, 69, 94]
    let resultArr = [];
    let arrLength = sortedArr.length;
    for (i = 0; i < arrLength; i++) {
        if (i % 2 == 0) {
            let currentNum = sortedArr.splice(sortedArr.length - 1, 1);
            resultArr.push(currentNum);
        } else {
            let currentNum = sortedArr.splice(0, 1);
            resultArr.push(currentNum);
        }
    }
    console.log(resultArr.join(' '));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);