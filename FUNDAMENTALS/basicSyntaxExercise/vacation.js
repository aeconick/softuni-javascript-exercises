function vacation(numPeople, typeGroup, dayOfWeek) {
    let price = 0;
    switch (typeGroup) {
        case 'Students':
            switch (dayOfWeek) {
                case 'Friday':
                    price = 8.45 * numPeople;
                    break;
                case 'Saturday':
                    price = 9.8 * numPeople;
                    break;
                case 'Sunday':
                    price = 10.46 * numPeople;
                    break;
            }
            break;
        case 'Business':
            if (numPeople >= 100) {
                numPeople -= 10;
            }
            switch (dayOfWeek) {
                case 'Friday':
                    price = 10.9 * numPeople;
                    break;
                case 'Saturday':
                    price = 15.6 * numPeople;
                    break;
                case 'Sunday':
                    price = 16 * numPeople;
                    break;
            }
            break;
        case 'Regular':
            switch (dayOfWeek) {
                case 'Friday':
                    price = 15 * numPeople;
                    break;
                case 'Saturday':
                    price = 20 * numPeople;
                    break;
                case 'Sunday':
                    price = 22.50 * numPeople;
                    break;
            }
            break;
    }
    if (typeGroup === 'Students' && numPeople >= 30) {
        price *= 0.85;
    }
    if (typeGroup === 'Regular' && numPeople >= 10 && numPeople <= 20) {
        price *= 0.95;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(40, "Regular", "Saturday");