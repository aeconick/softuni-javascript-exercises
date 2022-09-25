function furniture(input) {

    let text = input.join(' ');
    let furnitureArr = [];
    let totalSum = 0;
    let pattern = /[>]{2}(?<furniture>[A-Z][A-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/g;
    let valid = null;

    while ((valid = pattern.exec(text)) !== null) {
        let name = valid.groups.furniture;
        let price = Number(valid.groups.price);
        let quantity = (valid.groups.quantity);

        furnitureArr.push(name);
        totalSum += price * quantity;
    }

    console.log('Bought furniture:');

    furnitureArr.forEach(element => {
        return console.log(element);
    });

    console.log(`Total money spend: ${totalSum.toFixed(2)}`);

}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
);