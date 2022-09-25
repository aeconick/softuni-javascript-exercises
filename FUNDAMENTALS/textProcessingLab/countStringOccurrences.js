function countStringOccurrences(input, word) {
    let inputArr = input.split(' ');
    let count = 0;
    for (const el of inputArr) {
        if (el == word) {
            count++;
        }
    }
    console.log(count);
}

countStringOccurrences('This is a word and it also is a sentence',
    'is');