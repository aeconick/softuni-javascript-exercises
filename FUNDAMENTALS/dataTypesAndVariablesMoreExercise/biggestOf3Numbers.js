function biggestOf3Numbers(num1, num2, num3) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    if (num1 > maxNum) {
        maxNum = num1;
    }
    if (num2 > maxNum) {
        maxNum = num2;
    }
    if (num3 > maxNum) {
        maxNum = num3;
    }
    console.log(maxNum);
}

biggestOf3Numbers(130, 5, 99);