function negativeOrPositiveNumbers(arr) {
    arr = arr.map(Number);
    let newArr = [];
    for (const element of arr) {
        if (element < 0) {
            newArr.unshift(element);
        } else {
            newArr.push(element);
        }
    }
    return newArr.join('\n');
}

console.log(negativeOrPositiveNumbers(['7', '-2', '8', '9']));