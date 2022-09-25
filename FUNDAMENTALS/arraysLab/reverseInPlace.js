function reverseInPlace(input) {
    let final = '';
    for (let index = input.length - 1; index >= 0; index--) {
        final += input[index] + ' ';
    }
    console.log(final);
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);