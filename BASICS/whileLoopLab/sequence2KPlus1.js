function sequence2KPlus1(input) {
    let maxNumber = Number(input[0]);

    let number = 1;
    while (number <= maxNumber) {
        console.log(number);
        number = number * 2 + 1;
    }
}

sequence2KPlus1();