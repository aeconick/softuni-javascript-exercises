function primeNumberChecker(number) {
    let count = 0;
    for (let index = 1; index <= number; index++) {
        if (number % index == 0) {
            count++;
        }
    }
    if (count == 2) {
        console.log(true);
    } else {
        console.log(false);
    }
}

primeNumberChecker(11);