function stringSubstring(word, sentence) {
    let sentenceArr = sentence.toLowerCase().split(' ');
    for (const el of sentenceArr) {
        if (el == word) {
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`);
}

stringSubstring('javascript',
    'JavaScript is the best programming language'
);