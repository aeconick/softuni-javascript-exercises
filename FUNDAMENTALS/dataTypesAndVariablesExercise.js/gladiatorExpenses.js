function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalExpenses = 0;
    for (let index = 1; index <= lostFightsCount; index++) {
        if (index % 2 == 0) {
            totalExpenses += helmetPrice;
        }
        if (index % 3 == 0) {
            totalExpenses += swordPrice;
        }
        if (index % 6 == 0) {
            totalExpenses += shieldPrice;
        }
        if (index % 12 == 0) {
            totalExpenses += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);