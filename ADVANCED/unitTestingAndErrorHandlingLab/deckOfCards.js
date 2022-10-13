function deck(cards) {
    let result = [];
    for (let card of cards) {
        let face = '';
        let suit = '';
        if (card.length === 2) {
            [face, suit] = [card[0], card[1]];
        } else if (card.length === 3) {
            [face, suit] = [card[0] + card[1], card[2]];
        }
        try {
            result.push(solve(face, suit).toString());
        } catch (err) {
            result = ['Invalid card: ' + card]
        }
    }

    console.log(result.join(' '));

    function solve(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            S: '\u2660 ',
            H: '\u2665 ',
            D: '\u2666 ',
            C: '\u2663',
        }
        if (!validFaces.includes(face)) {
            throw new Error('Invalid face passed as a function argument: ' + face);
        }
        if (!suits[suit]) {
            throw new Error('Invalid suit passed as a function argument: ' + suit);
        }
        return {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        }
    }

}

deck(['AS', '10D', 'KH', '2C']);
deck(['5S', '3D', 'QD', '1C']);
