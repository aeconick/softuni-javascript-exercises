function oddOccurrences(input) {

    let words = input.toLowerCase().split(' ');
    let map = new Map();


    for (let word of words) {
        let num = 0;
        if (map.has(word)) {
            num = map.get(word);
        }
        num += 1;
        map.set(word, num);

    }

    let entries = Array.from(map);
    let toBePrinted = entries.filter((a) => a[1] % 2 !== 0);

    let final = [];
    for (let print of toBePrinted) {
        final.push(print[0])
    }
    console.log(final.join(' '));

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');