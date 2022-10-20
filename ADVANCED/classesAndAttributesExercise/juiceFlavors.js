function solve(input) {

    let juice = {};

    let bottles = {};

    for (const line of input) {
        let [flavour, quantity] = line.split(' => ');
        quantity = Number(quantity);
        if (!juice[flavour]) {
            juice[flavour] = 0;
        }
        juice[flavour] += quantity;

        if (juice[flavour] >= 1000) {
            while (juice[flavour] >= 1000) {
                if (!bottles[flavour]) {
                    bottles[flavour] = 1;
                } else {
                    bottles[flavour]++;
                }
                juice[flavour] -= 1000;
            }
        }
    }
    Object.keys(bottles).forEach(key => console.log(`${key} => ${bottles[key]}`))

}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);