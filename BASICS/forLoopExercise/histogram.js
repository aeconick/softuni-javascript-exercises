function histogram(input) {
    let number = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;


    for (let index = 1; index <= number; index++) {
        if (input[index] < 200) {
            p1++;
        } else if (input[index] <= 399) {
            p2++;
        } else if (input[index] <= 599) {
            p3++;
        } else if (input[index] <= 799) {
            p4++
        } else {
            p5++;
        }
    }
    console.log((p1 / number * 100).toFixed(2) + "%");
    console.log((p2 / number * 100).toFixed(2) + "%");
    console.log((p3 / number * 100).toFixed(2) + "%");
    console.log((p4 / number * 100).toFixed(2) + "%");
    console.log((p5 / number * 100).toFixed(2) + "%");
}

histogram(["3",
    "1",
    "2",
    "999"])
    ;