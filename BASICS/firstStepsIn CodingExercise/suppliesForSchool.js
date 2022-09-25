function suppliesForSchool(input) {
    let pens = input[0];
    let markers = input[1];
    let detergent = input[2];
    let discount = input[3] / 100;

    let pricePens = pens * 5.8;
    let priceMarkers = markers * 7.2;
    let priceDetergent = detergent * 1.2;

    let price = priceDetergent + priceMarkers + pricePens;
    let totalPrice = price - (price*discount);
    
    console.log(totalPrice);
}

suppliesForSchool();