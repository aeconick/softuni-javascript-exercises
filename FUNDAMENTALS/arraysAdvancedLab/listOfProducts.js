function listOfProducts(arr) {
    arr.sort();
    let finalArr = [];
    i = 1;
    for (const el of arr) {
        finalArr.push('' + i + '.' + el);
        i++;
    }
    return finalArr.join('\n');
}

console.log(listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']));