function integerAndFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let result = sum % 1 != 0 ? 'Float' : 'Integer'
    console.log(sum + ' - ' + result);
}

integerAndFloat(9, 100, 1.1);