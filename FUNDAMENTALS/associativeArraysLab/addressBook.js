function addressBook(input) {

    let obj = {};
    for (const line of input) {
        let [name, address] = line.split(':');
        obj[name] = address;
    }

    let sorted = Object.keys(obj);
    sorted.sort();
    for (const name of sorted) {
        console.log(name, '->', obj[name]);
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);