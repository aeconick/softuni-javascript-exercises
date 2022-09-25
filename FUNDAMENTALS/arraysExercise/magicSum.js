function magicSum(inputArr, magicSum) {
    for (let i = 0; i < inputArr.length; i++) {
        for (let j = i + 1; j < inputArr.length; j++) {
            if (inputArr[i] + inputArr[j] == magicSum) {
                console.log('' + inputArr[i] + ' ' + inputArr[j]);
            }
        }

    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);