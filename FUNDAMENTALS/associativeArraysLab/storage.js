function storage(input) {

    let map = new Map();
    for (const line of input) {
        let [item, quantity] = line.split(' ');
        quantity = Number(quantity);
        let addedQuantity = 0;
        if (map.has(item)) {
            addedQuantity = map.get(item);
        }
        map.set(item, quantity + addedQuantity);
    }

    let keys = Array.from(map.keys());
    for (const key of keys) {
        console.log(key, '->', map.get(key));
    }

}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);