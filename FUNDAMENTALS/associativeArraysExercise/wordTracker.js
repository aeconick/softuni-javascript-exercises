function wordTracker(input) {

    let repeats = {};

    let words = input.shift().split(' ');

    for (let word of words) {
        repeats[word] = 0;
    }

    for (let word of input) {
        if (repeats.hasOwnProperty(word)) {
            repeats[word]++;
        }
    }

    let entries = Object.entries(repeats);
    let sorted = entries.sort((a, b) => b[1] - a[1]);

    for (let sort of sorted) {
        console.log(sort[0], '-', sort[1]);
    }

}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences',
    'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);