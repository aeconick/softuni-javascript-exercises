function traveling(input) {
    // let destination = input[0];
    // let budget = Number(input[1]);

    let index = 0;
    let scanner = input[index];
    while (scanner !== 'End') {
        let destination = input[index];
        let savedMoney = 0;
        index++;
        let neededMoney = Number(input[index]);
        while (savedMoney < neededMoney) {
            index++;
            scanner = Number(input[index]);
            savedMoney += scanner;
        }
        console.log(`Going to ${destination}!`);
        index++;
        scanner = input[index];

    }

}

traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]);
