function oscars(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);


    for (let index = 3; index < input.length; index++) {
        if (index % 2 !== 0) {
            let points = index + 1;
            let total = input[index].length * Number(input[points]) / 2;
            academyPoints += total;
        }
        if (academyPoints > 1250.5) {
            break;
        }
    }
    if (academyPoints < 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - academyPoints).toFixed(1)} more!`);
    } else {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(academyPoints).toFixed(1)}!`);
    }
}

oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]);
