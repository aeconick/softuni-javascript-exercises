function login(input) {
    let username = input[0];
    let count = 0;
    let correctPassword = username.split('').reverse().join('');
    for (let i = 1; i < input.length; i++) {
        if (input[i] == correctPassword) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (count == 3) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
            count++;
        }
        
    }
}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);