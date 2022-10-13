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

console.log(solve('a', 'S').toString());
