function equalSums(inputArr) {
    let result = '';
    let found = false;
    for (let i = 0; i < inputArr.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;
        for (let j = 0; j < i; j++) {
            sumLeft += inputArr[j];
        }
        for (let k = inputArr.length - 1; k > i; k--) {
            sumRight += inputArr[k];
        }
        if (sumLeft == sumRight) {
            result += '' + i;
            found = true;
        }
    }
    if (found) {
        console.log(result);
    } else {
        console.log('no');
    }
}

equalSums([1, 2, 3, 3]);