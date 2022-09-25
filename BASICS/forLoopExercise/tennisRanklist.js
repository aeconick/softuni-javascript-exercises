function tennisRanklist(input) {
    let numberTournaments = Number(input[0]);
    let initialPoints = Number(input[1]);

    let countWins = 0;
    let initialPointsOnly = initialPoints;
    for (let index = 2; index < input.length; index++) {
        let outcome = input[index];

        switch (outcome) {
            case 'W':
                initialPoints += 2000;
                countWins++;
                break;
            case 'F':
                initialPoints += 1200;
                break;
            case 'SF':
                initialPoints += 720;
                break;

        }

    }
    console.log(`Final points: ${initialPoints}`);
    console.log(`Average points: ${Math.floor((initialPoints - initialPointsOnly) / numberTournaments)}`);
    console.log(`${(countWins / numberTournaments * 100).toFixed(2)}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"])

    ;