function factorialDivision(num1, num2) {
    let factorial1 = 1;
    let factorial2 = 1;
    for (i = 2; i <= num1; i++) {
        factorial1 *= i;
    }
    for (i = 2; i <= num2; i++) {
        factorial2 *= i;
    }
    let result = factorial1 / factorial2;
    console.log(result.toFixed(2));
}

factorialDivision(5, 2);