function solve(a, b, operator) {
    //'+', '-', '*', '/', '%', '**'
    switch (operator) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '/':
            return a / b;
            break;
        case '*':
            return a * b;
            break;
        case '%':
            return a % b;
            break;
        case '**':
            return a ** b;
            break;
    }
}

console.log(solve(3, 5.5, '*'));