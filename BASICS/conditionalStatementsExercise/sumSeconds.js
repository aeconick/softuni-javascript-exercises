function sumSeconds(input) {
    let secOne = Number(input[0]);
    let secTwo = Number(input[1]);
    let secThree = Number(input[2]);

    let timeSecs = secOne + secTwo + secThree;

    let countMins = 0;
    if (timeSecs > 59) {
        countMins = Math.floor(timeSecs / 60);
        timeSecs = Math.floor(timeSecs % 60);
    }

    if (timeSecs < 10) {
        console.log(`${countMins}:0${timeSecs}`);
    } else {
        console.log(`${countMins}:${timeSecs}`);
    }

}

sumSeconds(["35",
    "45",
    "44"])
    ;