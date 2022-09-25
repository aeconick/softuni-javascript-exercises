function solve(numberAsString, op1, op2, op3, op4, op5) {

    let number = Number(numberAsString);
    let operations = [op1, op2, op3, op4, op5];

    for (const operation of operations) {
        if (operation == 'chop') {
            number /= 2;
            console.log(number);
        } else if (operation == 'dice') {
            number = Math.sqrt(number);
            console.log(number);
        } else if (operation == 'spice') {
            number++;
            console.log(number);
        } else if (operation == 'bake') {
            number *= 3;
            console.log(number);
        } else if (operation == 'fillet') {
            number *= 0.80;
            console.log(number.toFixed(1));
        }
    }

}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');