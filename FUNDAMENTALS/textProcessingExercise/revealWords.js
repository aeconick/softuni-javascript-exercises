function revealWords(searchedWords, text) {
    let searchedWordsArr = searchedWords.split(', ');
    let textArr = text.split(' ');

    for (let searched of searchedWordsArr) {
        for (let word of textArr) {
            if (word.includes('*') && word.length === searched.length) {
                text = text.replace(word, searched);
            }
        }
    }
    console.log(text);
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);