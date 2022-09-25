function nxnMatrix(number) {
    for (let i = 0; i < number; i++) {
        let text = '';
        for (let j = 0; j < number; j++) {
            text += '' + number + ' ';
        }
        console.log(text);
    }
}

nxnMatrix(3);