function bonusScore(input) {
    let initialPoints = Number(input[0]);

    let bonusPoints = 0;
    if (initialPoints <= 100) {
        bonusPoints += 5;
    } else if (initialPoints > 1000) {
        bonusPoints = initialPoints * 0.10;
    } else if (initialPoints > 100) {
        bonusPoints = initialPoints * 0.20;
    }

    if (initialPoints % 2 === 0) {
        bonusPoints += 1;
    } else if (initialPoints % 10 === 5) {
        bonusPoints += 2;
    }

    console.log(bonusPoints);
    console.log(bonusPoints + initialPoints);
}

bonusScore(["1500"]);