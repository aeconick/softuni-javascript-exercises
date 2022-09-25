function vacation(input) {
    let neededMoney = Number(input[0]);
    let availableMoney = Number(input[1]);

    let index = 2;
    let scanner = input[index];
    let countSpendingDays = 0;
    let getOut = false;
    let totalDays = 0;
    while (availableMoney < neededMoney) {
        totalDays++;
        switch (scanner) {
            case 'spend':
                index++;
                scanner = Number(input[index]);
                countSpendingDays++;
                availableMoney -= scanner;
                index++;
                scanner = input[index];
                break;
            case 'save':
                index++;
                scanner = Number(input[index]);
                countSpendingDays = 0;
                availableMoney += scanner;
                index++;
                scanner = input[index];
                break;
        }
        if (availableMoney >= neededMoney) {
            console.log(`You saved the money for ${totalDays} days.`);
            break;
        }
        if (countSpendingDays === 5) {
            getOut = true;
            console.log("You can't save the money.");
            console.log(totalDays);
        }
        if (availableMoney < 0) {
            availableMoney = 0;
        }
        if(getOut){
            break;
        }
    }
}

vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])

;