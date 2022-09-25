function trekkingMania(input) {
    let numberOfGroups = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    let allPeople = 0;
    for (let index = 1; index < input.length; index++) {
        let peopleInGroup = Number(input[index]);
        allPeople += peopleInGroup;
        if (peopleInGroup <= 5) {
            p1 += peopleInGroup;
        } else if (peopleInGroup <= 12) {
            p2 += peopleInGroup;
        } else if (peopleInGroup <= 25) {
            p3 += peopleInGroup;
        } else if (peopleInGroup <= 40) {
            p4 += peopleInGroup;
        } else {
            p5 += peopleInGroup;
        }

    }
    console.log((p1 / allPeople * 100).toFixed(2) + "%");
    console.log((p2 / allPeople * 100).toFixed(2) + "%");
    console.log((p3 / allPeople * 100).toFixed(2) + "%");
    console.log((p4 / allPeople * 100).toFixed(2) + "%");
    console.log((p5 / allPeople * 100).toFixed(2) + "%");
}

trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
    ;