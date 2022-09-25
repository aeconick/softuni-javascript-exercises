function multiplicationTable(input) {
    let number = Number(input[0]);

    for (let index = 1; index <= 10; index++) {
        console.log(`${index} * ${number} = ${index * number}`); 
    }
}

multiplicationTable();