function repeatString(string, repeats) {
    let result = '';
    for (i = 1; i <= repeats; i++) {
        result += string;
    }
    console.log(result);
}

repeatString("abc", 3);