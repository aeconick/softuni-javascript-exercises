function password(input) {
    let name = input[0];
    let pass = input[1];
    
    let i = 2;
    let guessedPass = input[i];
    while (pass !== pass) {
        i++;
        guessedPass = input[i];
    }
    console.log(`Welcome ${name}!`);
}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
;