function subtract() {
    let firstNumElement = document.getElementById('firstNumber');
    let firstNumber = Number(firstNumElement.value);

    let secondNumElement = document.getElementById('secondNumber');
    let secondNumber = Number(secondNumElement.value);

    document.getElementById('result').textContent = firstNumber - secondNumber;
}