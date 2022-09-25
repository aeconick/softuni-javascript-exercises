function palindromeIntegers(input) {
    for (i = 0; i < input.length; i++) {
        currentNum = (input[i]).toString();
        let isValid = true;
        for (j = 0; j < Number((currentNum.length)) / 2; j++) {
            if (currentNum.charAt(j) != currentNum.charAt((currentNum.length) - 1 - j)) {
                isValid = false;
            }
        }
        if (isValid) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}

palindromeIntegers([123, 323, 421, 121]);