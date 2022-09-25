function passwordValidator(input) {
    // •	The length should be 6 - 10 characters (inclusive)
    // •	It should consist only of letters and digits
    // •	It should have at least 2 digits 

    let isValid = true;
    if (input.length < 6 || input.length > 10) {
        isValid = false;
        console.log('Password must be between 6 and 10 characters');
    }
    if (!(/^[A-Za-z0-9]*$/.test(input))) {
        isValid = false;
        console.log('Password must consist only of letters and digits');
    }
    let count = 0;
    for (i = 0; i < input.length; i++) {
        if (/^\d$/.test(input.charAt(i))) {
            count++;
        }
    }
    if (count < 2) {
        isValid = false;
        console.log('Password must have at least 2 digits');
    }

    if (isValid) {
        console.log('Password is valid');
    }

}

passwordValidator('MyPass123');