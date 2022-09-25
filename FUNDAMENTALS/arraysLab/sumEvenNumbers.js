function sumEvenNumbers(input) {
    let sum = 0;
    for (let index = 0; index < input.length; index++) {
        if (Number(input[index] % 2 == 0)) {
            sum += Number(input[index]);
        }
    }
    console.log(sum);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);