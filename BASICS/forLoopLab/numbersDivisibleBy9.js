function numbersDivisibleBy9(input) {
    let start = Number(input[0]);
    let stop = Number(input[1]);

    let sum = 0;
    for (let i = start; i <= stop; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }
    console.log(`The sum: ${sum}`);
    for (let i = start; i <= stop; i++) {
        if (i % 9 === 0) {
            console.log(i);
        }
    }
}

numbersDivisibleBy9();