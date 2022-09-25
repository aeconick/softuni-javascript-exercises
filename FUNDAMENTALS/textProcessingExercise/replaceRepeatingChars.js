function replaceRepeatingChars(input) {
    let result = input[0];
    for (i = 1; i < input.length; i++) {
        if (input.charAt(i) != input.charAt(i - 1)) {
            result += input.charAt(i);
        }
    }
    console.log(result);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');