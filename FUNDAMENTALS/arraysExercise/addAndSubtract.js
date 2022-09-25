function addAndSubtract(originalArr) {
    let modifiedArr = [];
    let originalSum = 0;
    let modifiedSum = 0;
    for (i = 0; i < originalArr.length; i++) {
        originalSum += originalArr[i];
        if (originalArr[i] % 2 == 0) {
            modifiedArr[i] = originalArr[i] + i;
        } else {
            modifiedArr[i] = originalArr[i] - i;
        }
        modifiedSum += modifiedArr[i];
    }
    console.log(modifiedArr);
    console.log(originalSum);
    console.log(modifiedSum);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);