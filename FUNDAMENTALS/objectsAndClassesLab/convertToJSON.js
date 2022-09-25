function convertToJSON(name, lastName, hairColor) {
    let myObj = {
        name,
        lastName,
        hairColor
    }
    let text = JSON.stringify(myObj);
    console.log(text);
}

convertToJSON('George', 'Jones', 'Brown');