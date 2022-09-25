function rounding(number, precision) {
    if (precision > 15) {
        precision = 15;
    }
    let newNumber = parseFloat(number.toFixed(precision));
    console.log(newNumber);
}

rounding(10.5, 3);