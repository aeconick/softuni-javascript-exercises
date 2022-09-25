function solve(arr, rotations) {

    for (let i = 0; i < rotations; i++) {
        let lastItem = arr.pop();
        arr.unshift(lastItem);
    }
    let output = arr.join(' ');
    return output;

}

solve(['1',
    '2',
    '3',
    '4'],
    2);