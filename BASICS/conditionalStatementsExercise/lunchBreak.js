function lunchBreak(input) {
    let tvShowName = input[0];
    let episodeTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime / 8;
    let chillTime = breakTime / 4;
    let timeLeft = breakTime - lunchTime - chillTime;

    if (timeLeft >= episodeTime) {
        console.log(`You have enough time to watch ${tvShowName} and left with ${Math.ceil(Math.abs(timeLeft-episodeTime))} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${tvShowName}, you need ${Math.ceil(Math.abs(timeLeft-episodeTime))} more minutes.`);
    }

}

lunchBreak(["Game of Thrones",
"60",
"96"]);