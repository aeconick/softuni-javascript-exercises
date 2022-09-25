function solve3(input) {

    let wordsAndDefinitions = input.shift().split(' | '); //arr[]
    let testWords = input.shift().split(' | '); // arr[]
    let teachersCommand = input.shift(); //string

    let dictionary = {};

    for (const line of wordsAndDefinitions) {
        let [word, definition] = line.split(': ');
        if (!dictionary.hasOwnProperty(word)) {
            dictionary[word] = [];
        }

        dictionary[word].push(definition);

    }

    if (teachersCommand == 'Hand Over') {
        let keys = Object.keys(dictionary);
        let text = '';
        for (let key of keys) {
            text += key + ' ';
        }
        console.log(text);
    } else if (teachersCommand == 'Test') {
        for (let word of testWords) {
            if (dictionary.hasOwnProperty(word)) {
                console.log(`${word}:`);
                for (let el of dictionary[word]) {
                    console.log(` -${el}`);
                }
            }
        }
    }
}

solve3(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
    "care | kitchen | flower",
    "Test"]);