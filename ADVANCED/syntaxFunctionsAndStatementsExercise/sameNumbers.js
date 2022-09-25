function solve(number) {
    let numberAsString = number.toString();
    let firstDigit = numberAsString[0];

    let sum = Number(firstDigit);
    let flag = true;
    for (let i = 1; i < numberAsString.length; i++) {
        if (firstDigit !== numberAsString[i]) {
            flag = false;
        }
        sum += Number(numberAsString[i]);
    }

    console.log(flag);
    console.log(sum);

}

solve(2222222);