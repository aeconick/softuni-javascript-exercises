function simpleCalculator(a, b, operator) {
    //'multiply', 'divide', 'add' or 'subtract'
    let operation = operator;

    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    switch (operation) {
        case 'multiply':
            console.log(multiply(a, b));
            break;
        case 'divide':
            console.log(divide(a, b));
            break;
        case 'add':
            console.log(add(a, b));
            break;
        case 'subtract':
            console.log(subtract(a, b));
            break;
    }
}
simpleCalculator(5, 5, 'multiply');