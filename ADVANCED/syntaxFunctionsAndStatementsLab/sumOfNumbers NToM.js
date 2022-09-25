function solve(numOneAsString, numTwoAsString) {
    let numOne = Number(numOneAsString);
    let numTwo = Number(numTwoAsString);

    let result = 0;
    for (let i = numOne; i <= numTwo; i++) {
        result += i;
    }

    return result;

}

console.log(solve('1', '5'));