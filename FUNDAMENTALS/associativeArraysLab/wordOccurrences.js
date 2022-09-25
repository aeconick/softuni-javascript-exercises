function wordOccurrences(input) {

    let word = {};

    for (let line of input) {
        if (word.hasOwnProperty(line)) {
            word[line]++;
        } else {
            word[line] = 1;
        }
    }
    let values = Object.values(word);
    let sorted = values.sort();
    //console.log(sorted);

    let keys = Object.keys(word);
    for (i = sorted.length - 1; i >= 0; i--) {
        for (const key of keys) {
            let escape = false;
            //console.log(sorted[i]);
            if (word[key] == sorted[i]) {
                console.log(key, '->', sorted[i], 'times');
                let index = keys.indexOf(key);
                keys.splice(index, 1);
                escape = true;
                break;
            }
            if (escape) {
                break;
            }
        }

    }

}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another",
    "sentence", "And", "finally", "the", "third", "sentence"]);