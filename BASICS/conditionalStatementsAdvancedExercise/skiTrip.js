function skiTrip(input) {
    let days = Number(input[0]);
    let accommodation = input[1];
    let grade = input[2];

    let price = 0;
    switch (accommodation) {
        case 'room for one person':
            price = (days - 1) * 18;
            break;
        case 'apartment':
            price = (days - 1) * 25;
            if (days < 10) {
                price *= 0.7;
            } else if (days <= 15) {
                price *= 0.65;
            } else {
                price *= 0.5;
            }
            break;
        case 'president apartment':
            price = (days - 1) * 35;
            if (days < 10) {
                price *= 0.9;
            } else if (days <= 15) {
                price *= 0.85;
            } else {
                price *= 0.8;
            }
            break;
    }
    if (grade === 'positive') {
        price *= 1.25;
    } else if (grade === 'negative') {
        price *= 0.9;
    }
    console.log(price.toFixed(2));
}

skiTrip();