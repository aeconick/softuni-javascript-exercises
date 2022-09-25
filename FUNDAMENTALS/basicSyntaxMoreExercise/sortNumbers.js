function sortNumbers(a, b, c) {
    if (a > b) {
        if (a > c) {
            if (b > c) {
                console.log(a);
                console.log(b);
                console.log(c);
            } else {
                console.log(a);
                console.log(c);
                console.log(b);
            }
        } else {
            console.log(c);
            console.log(a);
            console.log(b);
        }
    } else {
        if (b > c) {
            if (a > c) {
                console.log(b);
                console.log(a);
                console.log(c);
            } else {
                console.log(b);
                console.log(c);
                console.log(a);
            }
        } else {
            console.log(c);
            console.log(b);
            console.log(a);
        }
    }
}

sortNumbers(2, -5, 0);