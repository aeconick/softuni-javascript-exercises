function examPreparation(input) {
    let numberBadGrades = Number(input[0]);

    let index = 1;
    let countBadGrades = 0;
    let scanner = input[index];
    let lastProblem = '';
    let tookBreak = false;
    let totalScore = 0;
    let countProblems = 0;
    while (scanner !== 'Enough') {
        if (index % 2 !== 0) {
            lastProblem = scanner;
            index++;
            scanner = input[index];
        } else {
            scanner = Number(scanner);
            totalScore += scanner;
            countProblems++;
            if (scanner <= 4) {
                countBadGrades++;
            }
            index++;
            scanner = input[index];
        }
        if (countBadGrades === numberBadGrades) {
            tookBreak = true;
            console.log(`You need a break, ${numberBadGrades} poor grades.`);
            break;
        }
    }
    if (!tookBreak) {
        console.log(`Average score: ${(totalScore / countProblems).toFixed(2)}`);
        console.log(`Number of problems: ${countProblems}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}

examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])
    ;
