function timePlus15Minutes(input) {
    let hours = Number(input[0]);
    let mins = Number(input[1]) + 15;

    if (mins > 59) {
        hours++;
        mins -= 60;
    }

    if (hours >= 24) {
        hours = hours - 24;
    }

    if (mins < 10) {
        console.log(`${hours}:0${mins}`);
    } else {
        console.log(`${hours}:${mins}`);
    }

}

timePlus15Minutes(["23", "59"]);