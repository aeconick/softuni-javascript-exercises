function foodDelivery(input) {
    let chicken = input[0];
    let fish = input[1];
    let vegetarian = input[2];

    let chickenPrice = chicken * 10.35;
    let fishPrice = fish * 12.40;
    let vegetarianPrice = vegetarian * 8.15;

    let menus = chickenPrice + fishPrice + vegetarianPrice;
    let priceDesert = menus * 0.20;
    let totalPrice = menus + priceDesert + 2.5;

    console.log(totalPrice);
}

foodDelivery();