function maxSequenceOfEqualElements(inputArr) {
    let maxCounter = Number.MIN_SAFE_INTEGER;
    let outputNumber = '';
    for (let i = 0; i < inputArr.length; i++) {
        count = 0;
        for (let j = i + 1; j < inputArr.length; j++) {
            if (inputArr[i] == inputArr[j]) {
                count++;
            } else {
                break;
            }

        }
        if (count > maxCounter) {
            maxCounter = count;
            outputNumber = inputArr[i];
        }
    }
    let result = '';
    for (let index = 0; index <= maxCounter; index++) {
        result += outputNumber + ' ';
    }
    console.log(result);
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);