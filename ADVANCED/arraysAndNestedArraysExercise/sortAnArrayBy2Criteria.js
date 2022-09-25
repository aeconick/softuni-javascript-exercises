function solve(arr) {

    let sorted = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

    for (const el of sorted) {
        console.log(el);
    }

}

solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);