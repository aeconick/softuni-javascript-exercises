function houseParty(arr) {
    let resultArr = [];
    for (i = 0; i < arr.length; i++) {
        let currentArr = arr[i].split(' ');
        if (currentArr.length == 3) {
            if (!resultArr.includes(currentArr[0])) {
                resultArr.push(currentArr[0]);
            } else {
                console.log(`${currentArr[0]} is already in the list!`);
            }
        } else {
            if (resultArr.includes(currentArr[0])) {
                let index = resultArr.indexOf(currentArr[0]);
                resultArr.splice(index, 1);
            } else {
                console.log(`${currentArr[0]} is not in the list!`);
            }
        }
    }
    console.log(resultArr.join('\n'));
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
);