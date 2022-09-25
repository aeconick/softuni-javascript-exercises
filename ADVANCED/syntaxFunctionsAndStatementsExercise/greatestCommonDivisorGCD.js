function solve(numOne, numTwo) {
    let a = numOne;
    let b = numTwo;

    while (a !== b) {
        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
    }
    console.log(a);

}

solve(15, 5);