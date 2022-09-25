function cardGame(input) {

    let player = {};

    for (let line of input) {
        let [playerName, cards] = line.split(': ')
        let cardsArr = cards.split(', ');
        if (!player.hasOwnProperty(playerName)) {
            player[playerName] = [];
        }
        for (let card of cardsArr) {
            if (!player[playerName].includes(card)) {
                player[playerName].push(card);
            }
        }
    }

    let keys = Object.keys(player);
    for (let key of keys) {
        //console.log(player[key]);
        let totalScore = 0;
        for (let singleKey of player[key]) {
            //console.log(singleKey);
            //let [power, type] = singleKey.split('');
            let power = '';
            let type = '';
            if (singleKey.length == 2) {
                [power, type] = singleKey.split('');
            } else if (singleKey.length == 3) {
                power = singleKey[0] + singleKey[1];
                type = singleKey[2];
            }
            if (power == '2' || power == '3' || power == '4' || power == '5' || power == '6' ||
                power == '7' || power == '8' || power == '9' || power == '10') {
                power = Number(power);
            } else if (power == 'J') {
                power = 11;
            } else if (power == 'Q') {
                power = 12;
            } else if (power == 'K') {
                power = 13;
            } else if (power == 'A') {
                power = 14;
            }
            let currentScore = 0;
            if (type == 'S') {
                currentScore = power * 4;
            } else if (type == 'H') {
                currentScore = power * 3;
            } else if (type == 'D') {
                currentScore = power * 2;
            } else if (type == 'C') {
                currentScore = power * 1;
            }
            totalScore += currentScore;

        }
        console.log(`${key}: ${totalScore}`);
    }

}

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]
);