function sumFirstAndLast(arr) {
    arr = arr.map(Number);
    let result = arr[0] + arr.pop();
    return result;

}

console.log(sumFirstAndLast(['20', '30', '40']));