function triplesOfLatinLetters(n) {
    for (let i = 0; i < n; i++) {
        let letterOne = String.fromCharCode(97 + i);
        for (let j = 0; j < n; j++) {
            let letterTwo = String.fromCharCode(97 + j);
            for (let k = 0; k < n; k++) {
                let letterThree = String.fromCharCode(97 + k);
                console.log(letterOne + letterTwo + letterThree);
            }
        }
    }
}

triplesOfLatinLetters(2);