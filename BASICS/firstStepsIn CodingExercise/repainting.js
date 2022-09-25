function repainting(input){
    let nylonNeeded = input[0];
    let paintNeeded = input[1];
    let thinnerNeeded = input[2];
    let hoursNeeded = input[3];

    let priceNylon = nylonNeeded * 1.5;
    let pricePaint = paintNeeded * 14.50;
    let priceThinner = thinnerNeeded * 5.0;

    pricePaint *= 1.1;
    priceNylon += 2 * 1.5;

    let price = priceNylon + pricePaint + priceThinner + 0.4;
    let priceForWork = price * 0.3;
    let totalPriceWork = priceForWork*hoursNeeded;

    let totalPrice = totalPriceWork + price;

    console.log(totalPrice);
}

repainting();