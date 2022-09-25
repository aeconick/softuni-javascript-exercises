function smallestTwoNumbers(arr) {
    let result = [];
    let min = Number.MAX_SAFE_INTEGER;
    for (const el of arr) {
        if (el < min) {
            min = el;
        }
    }
    result.push(min);
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == min) {
            arr.splice(i, 1);
        }
    }
    min = Number.MAX_SAFE_INTEGER;
    for (const el of arr) {
        if (el < min) {
            min = el;
        }
    }
    result.push(min);
    return result.join(' ');
}

console.log(smallestTwoNumbers([30, 15, 50, 5]));
console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));
