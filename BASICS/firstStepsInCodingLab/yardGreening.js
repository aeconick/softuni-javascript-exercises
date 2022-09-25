function yardGreening(input) {
    let metersForGreening = Number(input[0]);

    let priceGreening = metersForGreening * 7.61;
    let discount = priceGreening * 0.18;
    let finalPrice = priceGreening - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["150"]);