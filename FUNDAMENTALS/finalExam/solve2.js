function solve2(input) {

    let n = Number(input.shift());;

    let pattern = /!([A-Z][a-z]{2,})!:\[([[A-Za-z]+)\]/g;

    for (let index = 0; index < n; index++) {
        let match = pattern.exec(input[index]);
        if (match == null) {
            console.log('The message is invalid');
            continue;
        }
        let command = match[1];
        let message = match[2];
        let final = '';
        for (let char of message) {
            let num = char.charCodeAt();
            final += num + ' ';
        }
        console.log(`${command}: ${final}`);
    }

}

solve2((["2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"]));