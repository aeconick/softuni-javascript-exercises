function trainTheTrainers(input) {
    let numPeople = Number(input[0]);

    let i = 1;
    let scanner = input[i];
    let totalSum = 0;
    let countLoops = 0;
    while (scanner !== 'Finish') {
        countLoops++;
        i++;
        let currentSum = 0;
        for (let j = i; j < i + numPeople; j++) {
            currentSum += Number(input[j]);
        }
        totalSum += currentSum;
        console.log(`${scanner} - ${(currentSum / numPeople).toFixed(2)}.`);
        i += numPeople;
        scanner = input[i];
    }
    console.log(`Student's final assessment is ${(totalSum / (countLoops*numPeople)).toFixed(2)}.`);
}

// n = 2
// 1 2 3

trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"]);
