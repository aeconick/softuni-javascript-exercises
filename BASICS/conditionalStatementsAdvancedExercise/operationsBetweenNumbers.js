function operationsBetweenNumbers(input) {
    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);
    let operator = input[2];

    let result = 0;
    switch (operator) {
        case '+':
            result = numberOne + numberTwo;
            if (result % 2 === 0) {
                console.log(`${numberOne} ${operator} ${numberTwo} = ${result} - even`);
            } else {
                console.log(`${numberOne} ${operator} ${numberTwo} = ${result} - odd`);
            }
            break;
        case '-':
            result = numberOne - numberTwo;
            if (result % 2 === 0) {
                console.log(`${numberOne} ${operator} ${numberTwo} = ${result} - even`);
            } else {
                console.log(`${numberOne} ${operator} ${numberTwo} = ${result} - odd`);
            }
            break;
        case '*':
            result = numberOne * numberTwo;
            if (result % 2 === 0) {
                console.log(`${numberOne} ${operator} ${numberTwo} = ${result} - even`);
            } else {
                console.log(`${numberOne} ${operator} ${numberTwo} = ${result} - odd`);
            }
            break;
        case '/':
            if (numberTwo === 0) {
                console.log(`Cannot divide ${numberOne} by zero`);
            } else {
                result = numberOne / numberTwo;
                console.log(`${numberOne} ${operator} ${numberTwo} = ${result.toFixed(2)}`);
            }
            break;
        case '%':
            if (numberTwo === 0) {
                console.log(`Cannot divide ${numberOne} by zero`);
            } else {
                result = numberOne % numberTwo;
                console.log(`${numberOne} ${operator} ${numberTwo} = ${result.toFixed(0)}`);
            }
            break;

    }
}

operationsBetweenNumbers();