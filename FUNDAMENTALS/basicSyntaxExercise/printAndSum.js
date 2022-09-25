function printAndSum(start, end) {
    let text = '';
    let sum = 0;
    for (let index = start; index <= end; index++) {
        text += index + ' ';
        sum += index;
    }
    console.log(text);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);