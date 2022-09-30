function solve(arr) {

    let obj = {};
    for (let el of arr) {
        let [name, population] = el.split(' <-> ');
        if (!obj.hasOwnProperty(name)) {
            obj[name] = 0;
        }
        obj[name] += +population;
    }
    for (let key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }

}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);