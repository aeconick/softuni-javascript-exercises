function calc() {
    let numOneElement = document.getElementById('num1');
    let numOne = Number(numOneElement.value);

    let numTwoElement = document.getElementById('num2');
    let numTwo = Number(numTwoElement.value);

    let result = numOne + numTwo;

    document.getElementById('sum').value = result;
}
