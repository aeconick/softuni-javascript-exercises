function smallestOfThreeNumbers(a, b, c) {
    let min = Number.MAX_SAFE_INTEGER;
    if (a < min) {
        min = a;
    }
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    console.log(min);
}

smallestOfThreeNumbers(600,
    342,
    123
);