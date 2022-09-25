function triangleOfNumbers(number) {
    let text = '';
    for (i = 1; i <= number; i++) {
        for (j = 1; j <= i; j++) {
            text += i + ' ';
        }
        console.log(text);
        text = '';
    }
}

triangleOfNumbers(3);