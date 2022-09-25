function accountBalance(input) {
    let command = input[0];

    let index = 0;
    let sum = 0;
    let IsValid = false;
    while (command !== 'NoMoreMoney') {
        command = Number(input[index])
        if (command < 0) {
            console.log('Invalid operation!');
            console.log(`Total: ${(sum).toFixed(2)}`);
            IsValid = true;
            break;
        } else {
            console.log(`Increase: ${command.toFixed(2)}`);
            sum += command;
        }
        index++;
        command = input[index];
    }
    if (!IsValid) {
        console.log(`Total: ${(sum).toFixed(2)}`);
    }
}

accountBalance(["120","45.55","-150"]);
