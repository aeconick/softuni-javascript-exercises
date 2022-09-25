function employees(input) {
    let person = {};
    for (let i = 0; i < input.length; i++) {
        person.name = input[i];
        person.number = input[i].length;
        console.log(`Name: ${person.name} -- Personal Number: ${person.number}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);