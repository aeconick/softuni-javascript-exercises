function solve(input) {

    let cars = {};
    for (const line of input) {
        let [brand, model, quantity] = line.split(' | ');
        quantity = Number(quantity);
        if (!cars[brand]) {
            cars[brand] = {
                [model]: 0,
            };
        }
        if (cars[brand][model]) {
            cars[brand][model] += quantity;
        } else {
            cars[brand][model] = quantity;
        }


    }
    Object.keys(cars).forEach(brand => {
        console.log(brand);
        Object.keys(cars[brand]).forEach(model => {
            console.log(`###${model} -> ${cars[brand][model]}`);
        })
    });
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);