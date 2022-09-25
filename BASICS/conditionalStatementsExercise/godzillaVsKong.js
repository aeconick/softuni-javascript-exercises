function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let numStatists = Number(input[1]);
    let priceOutfit = Number(input[2]);

    let decor = budget * 0.1;
    if (numStatists > 150) {
        priceOutfit *= 0.90;
    }
    let totalSum = decor + priceOutfit * numStatists;

    if (budget >= totalSum) {
        console.log('Action!');
        console.log(`Wingard starts filming with ${Math.abs(budget - totalSum).toFixed(2)} leva left.`);
    } else {
        console.log('Not enough money!');
        console.log(`Wingard needs ${Math.abs(budget - totalSum).toFixed(2)} leva more.`);
    }
}

godzillaVsKong(["20000",
    "120",
    "55.5"]);