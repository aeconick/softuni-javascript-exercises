function basketballEquipment(input) {
    let yearlyPrice = Number(input[0]);

    let shoesDiscount = yearlyPrice * 0.40;
    let shoes = yearlyPrice - shoesDiscount;
    let clothesDiscount = shoes * 0.20;
    let clothes = shoes - clothesDiscount;
    let ball = clothes / 4;
    let accessories = ball / 5;

    let result = yearlyPrice + shoes + clothes + ball + accessories;
    console.log(result);
}

basketballEquipment(["365"]);