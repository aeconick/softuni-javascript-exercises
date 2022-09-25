function convertToObject(input) {
    let myObj = JSON.parse(input);
    for (const key of Object.keys(myObj)) {
        console.log(`${key}: ${myObj[key]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');