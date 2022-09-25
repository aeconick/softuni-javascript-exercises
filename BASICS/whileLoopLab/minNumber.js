function minNumber(input) {
    let index = 0;
    let command = input[index];
    let min = Number.MAX_SAFE_INTEGER;
    while (command != 'Stop') {
        command = Number(input[index]);
        if (command < min) {
            min = command;
        }
        index++;
        command = input[index];
    }
    console.log(min);
}

minNumber(["100","99","80","70","Stop"]);