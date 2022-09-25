function partyTime(input) {

    let party = {};
    party.vip = [];
    party.regular = [];

    let command = input.shift();
    while (command !== 'PARTY') {

        if (!isNaN(command[0])) {
            party.vip.push(command);
        } else {
            party.regular.push(command);
        }
        command = input.shift();
    }

    for (let guest of input) {
        if (party.vip.includes(guest)) {
            let index = party.vip.indexOf(guest);
            party.vip.splice(index, 1);
        } else if (party.regular.includes(guest)) {
            let index = party.regular.indexOf(guest);
            party.regular.splice(index, 1);
        }
    }

    let allGuests = party.vip.length + party.regular.length;
    console.log(allGuests);
    if (party.vip.length != 0) {
        console.log(party.vip.join('\n'));
    }
    if (party.regular.length != 0) {
        console.log(party.regular.join('\n'));
    }

}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);