function aMinerTask(input) {

    let obj = {};

    for (i = 0; i < input.length - 1; i += 2) {
        let resource = input[i];
        let quantity = input[i + 1];
        if (!obj.hasOwnProperty(resource)) {
            obj[resource] = Number(quantity);
        } else {
            obj[resource] += Number(quantity);
        }
    }

    let keys = Object.keys(obj);
    for (let key of keys) {
        console.log(key, '->', obj[key]);
    }

}

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]
);