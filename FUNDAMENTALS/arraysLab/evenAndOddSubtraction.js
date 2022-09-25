function evenAndOddSubtraction(input) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let index = 0; index < input.length; index++) {
        if (Number(input[index]) % 2 == 0) {
            sumEven += Number(input[index]);
        } else {
            sumOdd += Number(input[index]);
        }
    }
    console.log(sumEven - sumOdd);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);