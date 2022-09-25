function censoredWords(sentence, searchedWord) {
    while (sentence.includes(searchedWord)) {
        sentence = sentence.replace(searchedWord, '*'.repeat(searchedWord.length))
    }
    console.log(sentence);

}

censoredWords('A small sentence with some words', 'small');