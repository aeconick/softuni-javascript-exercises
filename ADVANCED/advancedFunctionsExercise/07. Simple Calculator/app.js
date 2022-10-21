function calculator() {
    let firstInput;
    let secondInput;
    let operationResult;

    function init(selector1, selector2, selector3) {
        firstInput = document.querySelector(selector1);
        secondInput = document.querySelector(selector2);
        operationResult = document.querySelector(selector3);
    };

    function add() {
        operationResult.value = Number(firstInput.value) + Number(secondInput.value);
    };

    function subtract() {
        operationResult.value = Number(firstInput.value) - Number(secondInput.value);
    }


    let obj = {
        init,
        add,
        subtract
    };
    return obj;
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');




