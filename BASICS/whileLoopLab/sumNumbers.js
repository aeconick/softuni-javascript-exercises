function sumNumbers(input) {
    let initialNumber = Number(input[0]);

    let i = 1;
    let number = Number(input[1]);
    let sum = number;
    while (sum < initialNumber) {
        i++;
        number = Number(input[i]);
        sum += number;
    }
    console.log(sum);
}

sumNumbers(["100","10","20","30","40"]);

