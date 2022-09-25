function storeProvision(arr1, arr2) {
    let store = {};
    for (i = 0; i < arr1.length; i += 2) {
        let current = arr1[i];
        let value = Number(arr1[i + 1]);
        store[current] = value;
    }
    for (i = 0; i < arr2.length; i += 2) {
        let current = arr2[i];
        let value = Number(arr2[i + 1]);
        if (current in store) {
            store[current] = store[current] + value;
        } else {
            store[current] = value;
        }
    }
    let entries = Object.entries(store);
    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);