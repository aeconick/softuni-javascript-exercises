function firstAndLastKNumbers(arr) {
    let k = arr.shift();
    let newArr = [];
    newArr.push(arr.slice(0, k).join(' '));
    newArr.push(arr.slice(-k).join(' '));

    return newArr.join('\n');
}

console.log(firstAndLastKNumbers([3, 6, 7, 8, 9]));