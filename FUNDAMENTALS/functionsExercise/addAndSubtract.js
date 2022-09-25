function addAndSubtract(a, b, c) {
    finalSum = sum(a, b);
    finalResult = subtract(finalSum, c);
    console.log(finalResult);

    function sum(num1, num2) {
        return num1 + num2;
    }

    function subtract(num1, num2) {
        return num1 - num2;
    }
}

addAndSubtract(23, 6, 10);