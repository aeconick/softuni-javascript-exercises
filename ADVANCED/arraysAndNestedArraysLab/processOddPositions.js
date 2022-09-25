function solve(inputArr) {

    let oddNumbers = [];
    for (let i = 0; i < inputArr.length; i++) {
        if (i % 2 != 0) {
            oddNumbers.push(inputArr[i]);
        }
    }

    let reversedArr = oddNumbers.reverse();
    let final = '';
    for (const el of reversedArr) {
        final += el * 2 + ' ';
    }

    console.log(final);

}

solve([10, 15, 20, 25]);