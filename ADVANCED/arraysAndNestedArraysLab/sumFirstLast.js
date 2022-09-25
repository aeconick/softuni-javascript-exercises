function solve(inputArr) {

    let first = Number(inputArr.shift()) || 0;
    let last = Number(inputArr.pop()) || 0;
    let result = first + last;

    return result;

}

let result = solve(['20', '30', '40']);
console.log(result);