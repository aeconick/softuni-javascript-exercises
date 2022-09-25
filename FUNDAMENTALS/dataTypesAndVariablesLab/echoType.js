function echoType(input) {
    let result = typeof input;
    if (result == 'string' || result == 'number') {
        console.log(result);
        console.log(input);
    } else {
        console.log(result);
        console.log('Parameter is not suitable for printing');
    }
}

echoType('Hello, JavaScript!');
echoType(18);
echoType(null);
