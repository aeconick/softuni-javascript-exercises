function rightPlace(firstWord, missingLetter, endWord) {
    let result = '';
    for (i = 0; i < firstWord.length; i++) {
        if (firstWord.charAt(i) == '_') {
            result += missingLetter;
        } else {
            result += firstWord.charAt(i);
        }
    }
    if (result == endWord) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'o', 'Strong');