function sumDigits(number) {
    let numberAsString = number.toString();
    let sum = 0;
    for (let index = 0; index < numberAsString.length; index++) {
        sum += Number(numberAsString[index]);
    }
    console.log(sum);
}

sumDigits(245678);