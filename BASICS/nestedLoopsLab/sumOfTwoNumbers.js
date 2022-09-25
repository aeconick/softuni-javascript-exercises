function sumOfTwoNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let magicNum = Number(input[2]);

    let position = 0;
    let isFound = false;
    for (let i = n1; i <= n2; i++) {
        for (let j = n1; j <= n2; j++) {
            position++;
            if (i + j === magicNum) {
                isFound = true;
                console.log(`Combination N:${position} (${i} + ${j} = ${magicNum})`);
                break;
            }
            if (isFound) {
                break;
            }

        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${position} combinations - neither equals ${magicNum}`);
    }
}

sumOfTwoNumbers(["1",
    "10",
    "5"]);
