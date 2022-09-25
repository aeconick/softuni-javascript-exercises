function maxNumber(input) {
    let index = 0;
    let command = input[index];
    let max = Number.MIN_SAFE_INTEGER;
    while (command != 'Stop') {
        command = Number(input[index]);
        if (command > max) {
            max = command;
        }
        index++;
        command = input[index];
    }
    console.log(max);
}

maxNumber(["-1","-2","Stop"]);