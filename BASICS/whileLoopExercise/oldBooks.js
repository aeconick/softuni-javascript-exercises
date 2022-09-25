function oldBooks(input) {
    let favoriteBook = input[0];

    let index = 1;
    let searchedBook = input[index];
    let isFound = false;
    while (searchedBook !== 'No More Books') {
        if (searchedBook === favoriteBook) {
            isFound = true;
            break;
        }
        index++;
        searchedBook = input[index];
    }
    if (isFound) {
        console.log(`You checked ${index - 1} books and found it.`);
    } else {
        console.log('The book you search is not here!');
        console.log(`You checked ${index - 1} books.`);
    }
}

oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
;