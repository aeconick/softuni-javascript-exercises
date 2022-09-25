function specialNumbers(input) {
    let n = Number(input[0]);

    let text = '';
    for (let i = 1111; i <= 9999; i++) {
        let m1 = Math.floor((i / 1) % 10);
        let m2 = Math.floor((i / 10) % 10);
        let m3 = Math.floor((i / 100) % 10);
        let m4 = Math.floor((i / 1000) % 10);
        if (n % m1 === 0 && n % m2 === 0 && n % m3 === 0 && n % m4 === 0) {
            text += i + " ";
        }
    }
    console.log(text);

    // let number = 2418;
    // let lastDigit1 = Math.floor((number / 1) % 10);
    // let lastDigit2 = Math.floor((number / 10) % 10);
    // let lastDigit3 = Math.floor((number / 100) % 10);
    // let lastDigit4 = Math.floor((number / 1000) % 10);
    // console.log(lastDigit1);
    // console.log(lastDigit2);
    // console.log(lastDigit3);
    // console.log(lastDigit4);

}

specialNumbers(["3"]);