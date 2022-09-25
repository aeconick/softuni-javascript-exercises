function solve(inputArr) {

    let sortedArr = inputArr.sort((a, b) => a - b);
    let index = Math.floor(sortedArr.length / 2) // 0 1 2 3 4   -  5/2= 2.5
    let outputArr = sortedArr.slice(index);

    return outputArr;

}

result = solve([3, 19, 14, 7, 2, 19, 6]);
console.log(result);