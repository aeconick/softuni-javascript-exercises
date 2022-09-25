function arrayManipulations(arr) {

    let newArr = arr[0].split(' ');
    for (i = 1; i < arr.length; i++) {
        command = arr[i].split(' ');
        switch (command[0]) {
            case 'Add':
                newArr.push(command[1]);
                break;
            case 'Remove':
                for (j = 0; j < newArr.length; j++) {
                    if (newArr[j] == command[1]) {
                        newArr.splice(j, 1);
                    }
                }
                break;
            case 'RemoveAt':
                newArr.splice(Number(command[1]), 1);
                break;
            case 'Insert':
                newArr.splice(Number(command[2]), 0, command[1]);
                break;
        }

    }

    console.log(newArr.join(' '));

}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);