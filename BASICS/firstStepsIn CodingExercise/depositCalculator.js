function depositCalculator(input) {
    let deposit = Number(input[0]);
    let term = Number(input[1]);
    let interest = Number(input[2]) / 100;
    let result = deposit + term * ((deposit * interest) / 12);
    console.log(result.toFixed(2));
}

depositCalculator();