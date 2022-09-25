function solve(inputArr) {

    let outputArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] == 'add') {
            outputArr.push(i + 1);
        } else {
            outputArr.pop();
        }
    }
    if (outputArr.length != 0) {
        for (const el of outputArr) {
            console.log(el);
        }
    } else {
        console.log('Empty');
    }

}

solve(['add',
    'add',
    'remove',
    'add',
    'add']
);