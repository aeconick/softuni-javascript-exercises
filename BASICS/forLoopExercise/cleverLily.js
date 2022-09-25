function cleverLily(input) {
    let age = Number(input[0]);
    let priceWasher = Number(input[1]);
    let priceToy = Number(input[2]);

    let countToys = 0;
    let specialMoney = 10;
    let countStolenMoney = 0;
    let money = 0;
    let totalMoney = 0;
    for (let index = 1; index <= age; index++) {
        if (index % 2 !== 0) {
            countToys++;
        } else {
            countStolenMoney++;
            money += specialMoney;
            specialMoney += 10;
        }
    }
    totalMoney = countToys * priceToy + money - countStolenMoney;
    if (totalMoney >= priceWasher) {
        console.log(`Yes! ${(totalMoney - priceWasher).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceWasher - totalMoney).toFixed(2)}`);
    }
}

cleverLily(["10",
    "170.00",
    "6"]);