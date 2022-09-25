function charactersInRange(char1, char2) {
    let result1 = Number(char1.charCodeAt());
    let result2 = Number(char2.charCodeAt());
    if (result1 < result2) {
        let result = '';
        for (let i = result1 + 1; i < result2; i++) {
            let char = String.fromCharCode(i);
            result += char + ' ';
        }
        console.log(result);
    } else {
        let result = '';
        for (let i = result2 + 1; i < result1; i++) {
            let char = String.fromCharCode(i);
            result += char + ' ';
        }
        console.log(result);
    }
}

charactersInRange('a', 'd');