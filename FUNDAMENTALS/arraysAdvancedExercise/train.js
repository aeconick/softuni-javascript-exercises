function train(arr) {

    let newArr = arr[0].split(' ').map(Number); //(7) -> [32, 54, 21, 12, 4, 0, 23]
    arr.shift();
    let maxCapacity = +arr[0]; // 75
    arr.shift();

    let command = [];
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');
        //console.log(command);
        if (command.includes('Add')) {
            newArr.push(Number(command[1]));
        } else {
            for (let j = 0; j < newArr.length; j++) {
                let newNumber = newArr[j] + Number(command[0]);
                if (newNumber <= maxCapacity) {
                    newArr.splice(j, 1, newNumber);
                    break;
                }
            }
        }
    }
    console.log(newArr.join(' '));

}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);