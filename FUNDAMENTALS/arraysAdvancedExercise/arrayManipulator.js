function arrayManipulator(arr, allCommands) {

    let myArr = arr.slice();

    for (let i = 0; i < allCommands.length; i++) {
        let currentCommand = allCommands[i].split(' ');
        let typeOfCommand = currentCommand.shift();
        let numbers = currentCommand.map(Number);

        switch (typeOfCommand) {
            case 'add':
                myArr.splice(numbers[0], 0, numbers[1]);
                break;
            case 'addMany':
                let index = numbers.shift();
                let m = 0;
                for (let j = 0; j < numbers.length; j++) {
                    myArr.splice((index + m), 0, numbers[j]);
                    m++;
                }
                break;
            case 'contains':
                console.log(myArr.indexOf(numbers[0]));
                break;
            case 'remove':
                myArr.splice(numbers[0], 1)
                break;
            case 'shift':
                for (j = 0; j < numbers[0]; j++) {
                    myArr.push(myArr.shift());
                }
                break;
            case 'sumPairs':
                if (myArr.length % 2 != 0) {
                    myArr.push(0);
                }
                let sum = 0;
                let sumArr = [];
                for (let j = 0; j < myArr.length; j += 2) {
                    sum = myArr[j] + myArr[j + 1];
                    sumArr.push(sum);
                }
                myArr = sumArr.slice();
                break;
            case 'print':
                console.log(`[ ${myArr.join(', ')} ]`);
                break;
        }
    }

}

arrayManipulator([1, 2, 3, 4, 5],
    ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);