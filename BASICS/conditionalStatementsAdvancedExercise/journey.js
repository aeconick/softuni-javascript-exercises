function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = '';
    let price = 0;
    let place = '';
    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season === 'summer') {
            price = budget * 0.3;
            place = 'Camp';
        } else if (season === 'winter') {
            price = budget * 0.7;
            place = 'Hotel';
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        if (season === 'summer') {
            price = budget * 0.4;
            place = 'Camp';
        } else if (season === 'winter') {
            price = budget * 0.8;
            place = 'Hotel';
        }
    } else {
        destination = 'Europe';
        price = budget * 0.9;
        place = 'Hotel';
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${price.toFixed(2)}`);
}

journey();