function reverseAnArrayOfNumbers(num, originalArr) {
    let newArr = [];
    for (let i = 0; i < num; i++) {
        newArr[i] = originalArr[i];
    }
    let reversed = newArr.reverse();
    let final = '';
    for (let y = 0; y < num; y++) {
        final += reversed[y] + ' ';
    }
    console.log(final);
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);