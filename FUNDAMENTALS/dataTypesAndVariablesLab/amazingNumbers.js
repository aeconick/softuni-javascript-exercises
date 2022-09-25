function amazingNumbers(input) {
    let inputAsString = input.toString();
    let sum = 0;
    for (let index = 0; index < inputAsString.length; index++) {
        sum += Number(inputAsString.charAt(index));
    }
    let sumAsString = sum.toString();
    let isAmazing = false;
    for (let index = 0; index < sumAsString.length; index++) {
        if (sumAsString.charAt(index) == 9) {
            isAmazing = true;
        }
    }
    if (isAmazing) {
        console.log(`${input} Amazing? True`);
    } else {
        console.log(`${input} Amazing? False`);
    }
}

amazingNumbers(1233);