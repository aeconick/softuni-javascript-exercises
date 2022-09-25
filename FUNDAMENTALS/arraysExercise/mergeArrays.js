function mergeArrays(firstArr, secondArr) {
    let finalArr = [];
    for (let i = 0; i < firstArr.length; i++) {

        if (i % 2 == 0 || i == 0) {
            finalArr[i] = Number(firstArr[i]) + Number(secondArr[i]);
        } else {
            finalArr[i] = '' + firstArr[i] + secondArr[i];
        }
    }
    console.log(finalArr.join(' - '));
}


mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);