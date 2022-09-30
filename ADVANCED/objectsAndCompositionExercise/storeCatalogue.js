function solve(array) {

    let sorted = array.sort((a, b) => a.localeCompare(b));

    let current = [];
    let char = '';

    for (let i = 0; i < array.length; i++) {
        current = sorted[i].split(' : ');

        if (sorted[i][0] !== char) {
            console.log(sorted[i][0]);
        }
        console.log(`  ${current[0]}: ${current[1]}`);

        char = sorted[i][0];
    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);