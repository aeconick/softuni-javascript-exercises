function toyShop(input) {
    let priceExcursion = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let pricePuzzles = puzzles * 2.6;
    let priceDolls = dolls * 3;
    let priceBears = bears * 4.1;
    let priceMinions = minions * 8.2;
    let priceTrucks = trucks * 2;

    let totalSum = pricePuzzles + priceDolls + priceBears + priceMinions + priceTrucks;
    let numToys = puzzles + dolls + bears + minions + trucks;

    if (numToys >= 50) {
        totalSum *= 0.75;
    }

    totalSum *= 0.90;

    if (totalSum >= priceExcursion) {
        console.log(`Yes! ${Math.abs(totalSum - priceExcursion).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${Math.abs(totalSum - priceExcursion).toFixed(2)} lv needed.`);
    }


}

toyShop();