function newHouse(input) {
    let typeFlowers = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let totalPrice = 0;
    switch (typeFlowers) {
        case 'Roses':
            totalPrice = numberOfFlowers * 5;
            if (numberOfFlowers > 80) {
                totalPrice *= 0.9;
            }
            break;
        case 'Dahlias':
            totalPrice = numberOfFlowers * 3.8;
            if (numberOfFlowers > 90) {
                totalPrice *= 0.85;
            }
            break;
        case 'Tulips':
            totalPrice = numberOfFlowers * 2.8;
            if (numberOfFlowers > 80) {
                totalPrice *= 0.85;
            }
            break;
        case 'Narcissus':
            totalPrice = numberOfFlowers * 3;
            if (numberOfFlowers < 120) {
                totalPrice *= 1.15;
            }
            break;
        case 'Gladiolus':
            totalPrice = numberOfFlowers * 2.5;
            if (numberOfFlowers < 80) {
                totalPrice *= 1.2;
            }
            break;
    }
    if (budget >= totalPrice) {
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${typeFlowers} and ${(budget-totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`);
    }
}

newHouse();