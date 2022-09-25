function searchForANumber(arr, commands) {
    let numbersToTake = commands[0];
    let numbersToDelete = commands[1];
    let numberToSearch = commands[2];

    let newArr = arr.slice(0, numbersToTake);
    newArr.splice(0, numbersToDelete);
    let count = 0;
    for (i = 0; i < newArr.length; i++) {
        if (newArr[i] == numberToSearch) {
            count++;
        }
    }
    console.log(`Number ${numberToSearch} occurs ${count} times.`);
}

searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    );