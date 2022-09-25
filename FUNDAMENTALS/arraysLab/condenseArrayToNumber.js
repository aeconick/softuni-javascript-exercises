function condenseArrayToNumber(input) {
    let condensed = [];
    while (input.length > 1) {
        for (let index = 0; index < input.length - 1; index++) {
            condensed[index] = input[index] + input[index + 1];
        }
        input = [];
        for (let i = 0; i < condensed.length; i++) {
            input[i] = condensed[i];
        }
        condensed = [];
    }
    console.log(input.toString());
}

condenseArrayToNumber([2, 10, 3]);
